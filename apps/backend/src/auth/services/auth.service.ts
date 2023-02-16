import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { UserEntity } from "src/users/entities/user.entity";
import { RegisterInput } from "src/auth/inputs/register.input";
import { LoginInput } from "src/auth/inputs/login.input";
import { ConfigService } from "@nestjs/config";
import { LoginOutput } from "src/auth/outputs/login.output";

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateJWT = (id: number, secret: string) => jwt.sign({ id }, secret, { expiresIn: '24h' });

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
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: `User with email ${email} is already exists`,
      }, HttpStatus.BAD_REQUEST);
    }

    const hashPassword: string = bcrypt.hashSync(password, 7);
    return await this.userRepository.save({ ...registerInput, password: hashPassword });
  }

  async login(loginInput: LoginInput): Promise<LoginOutput> {
    const { email, password } = loginInput;
    const user = await this.userRepository.findOneBy({ email });

    if (!user) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: `User with email ${email} does not exists`,
      }, HttpStatus.BAD_REQUEST);
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: `Password incorrect`,
      }, HttpStatus.BAD_REQUEST);
    }

    const secretKey = this.configService.get<string>('SECRET_KEY');
    const token = generateJWT(user.id, secretKey);

    return { access_token: token };
  }

}