import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";

import { UsersService } from "src/users/services/users.service";
import { UserEntity } from "src/users/entities/user.entity";
import { CreateUserInput } from "src/users/inputs/create-user.input";
import { UpdateUserInput } from "src/users/inputs/update-user.input";

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => [UserEntity])
  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userService.getAllUsers();
  }

  @Query(() => UserEntity)
  async getUserById(@Args('id') id: number): Promise<UserEntity> {
    return await this.userService.getUserById(id);
  }

  @Mutation(() => UserEntity)
  async createUser(@Args('createUser') createUserInput: CreateUserInput): Promise<UserEntity> {
    return await this.userService.createUser(createUserInput);
  }

  @Mutation(() => UserEntity)
  async updateUser(@Args('updateUser') updateUserInput: UpdateUserInput): Promise<UserEntity> {
    return await this.userService.updateUser(updateUserInput);
  }

  @Mutation(() => UserEntity)
  async deleteUser(@Args('id') id: number): Promise<number> {
    return await this.userService.deleteUser(id);
  }

}