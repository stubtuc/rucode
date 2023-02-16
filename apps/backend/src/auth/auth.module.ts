import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AuthService } from "src/auth/services/auth.service";
import { UserEntity } from "src/users/entities/user.entity";
import { AuthResolver } from "src/auth/resolvers/auth.resolver";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [AuthService, AuthResolver]
})
export class AuthModule {}