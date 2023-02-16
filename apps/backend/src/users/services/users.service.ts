import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { CreateUserInput } from "src/users/inputs/create-user.input";
import { UserEntity } from "src/users/entities/user.entity";
import { UpdateUserInput } from "src/users/inputs/update-user.input";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find({ relations: ['projects'] });
  }

  async getUserById(id: number): Promise<UserEntity> {
    return await this.userRepository.findOne({ relations: ['projects'], where: { id } })
  }

  async createUser(userInput: CreateUserInput): Promise<UserEntity> {
    return await this.userRepository.save({ ...userInput });
  }

  async updateUser(userInput: UpdateUserInput): Promise<UserEntity> {
    await this.userRepository.update({ id: userInput.id }, { ...userInput });
    return await this.getUserById(userInput.id);
  }

  async deleteUser(id: number): Promise<number> {
    await this.userRepository.delete({ id });
    return id;
  }
}
