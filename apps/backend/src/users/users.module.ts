import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UsersService } from "src/users/services/users.service";
import { UserEntity } from "src/users/entities/user.entity";
import { UserResolver } from "src/users/resolvers/user.resolver";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [UsersService, UserResolver],
})
export class UsersModule {}