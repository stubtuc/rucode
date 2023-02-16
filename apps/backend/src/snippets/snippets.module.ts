import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { SnippetEntity } from "src/snippets/entities/snippet.entity";
import { SnippetsService } from "src/snippets/services/snippets.service";
import { SnippetsResolver } from "src/snippets/resolvers/snippets.resolver";

@Module({
  imports: [
    TypeOrmModule.forFeature([SnippetEntity]),
  ],
  providers: [SnippetsService, SnippetsResolver],
})
export class SnippetsModule {}