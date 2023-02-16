import { Query, Resolver, Args } from "@nestjs/graphql";

import { AuthService } from "src/auth/services/auth.service";
import { UserEntity } from "src/users/entities/user.entity";
import { RegisterInput } from "src/auth/inputs/register.input";
import { LoginInput } from "src/auth/inputs/login.input";
import { LoginOutput } from "src/auth/outputs/login.output";

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => UserEntity)
  async register (@Args('registerInput') registerInput: RegisterInput): Promise<UserEntity> {
    return await this.authService.register(registerInput);
  }

  @Query(() => LoginOutput)
  async login (@Args('loginInput') loginInput: LoginInput): Promise<LoginOutput> {
    return await this.authService.login(loginInput);
  }
}