import {BadRequestException, HttpException, HttpStatus, Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { UserEntity } from "src/users/entities/user.entity";
import { RegisterInput } from "src/auth/inputs/register.input";
import { LoginInput } from "src/auth/inputs/login.input";
import { ConfigService } from "@nestjs/config";
import { LoginOutput } from "src/auth/outputs/login.output";

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateJWT = (id: number, secret: string) => {
  return jwt.sign({ id }, secret, { expiresIn: '24h' });
};

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private configService: ConfigService
  ) {}

  async register(registerInput: RegisterInput): Promise<UserEntity> {
    const { email, password } = registerInput;
    const candidate = await this.userRepository.findOneBy({ email });

    if (candidate) {
      throw new BadRequestException(`User with email ${email} is already exists`);
    }

    const hashPassword: string = bcrypt.hashSync(password, 7);
    return await this.userRepository.save({ ...registerInput, password: hashPassword });
  }

  async login(loginInput: LoginInput): Promise<LoginOutput> {
    const { email, password } = loginInput;
    const user = await this.userRepository.findOneBy({ email });

    if (!user) {
      throw new BadRequestException(`User with email ${email} does not exists`);
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      throw new BadRequestException('Password incorrect');
    }

    const secretKey = this.configService.get<string>('SECRET_KEY');
    const token = generateJWT(user.id, secretKey);

    return { access_token: token };
  }

}