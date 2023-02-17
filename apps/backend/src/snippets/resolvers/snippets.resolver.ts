import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";

import { SnippetEntity } from "src/snippets/entities/snippet.entity";
import { CreateSnippetInput } from "src/snippets/inputs/create-snippet.input";
import { SnippetsService } from "src/snippets/services/snippets.service";
import { UpdateSnippetInput } from "src/snippets/inputs/update-snippet.input";
import {UseGuards} from "@nestjs/common";
import {JwtGuard} from "src/auth/utils/jwt/JwtGuard";
import {UserID} from "src/auth/utils/decorators/UserID.decorator";

@Resolver('Snippet')
export class SnippetsResolver {
  constructor(private readonly snippetsService: SnippetsService) {}

  @Query(() => [SnippetEntity])
  async getAllSnippets(): Promise<SnippetEntity[]> {
    return await this.snippetsService.getAllSnippets();
  }

  @Query(() => SnippetEntity)
  async getSnippetById(@Args('id') id: number): Promise<SnippetEntity> {
    return await this.snippetsService.getSnippetById(id);
  }

  @UseGuards(JwtGuard)
  @Mutation(() => SnippetEntity)
  async createSnippet(
      @UserID() userId: number,
      @Args('createSnippet') createSnippetInput: CreateSnippetInput
  ): Promise<SnippetEntity> {
    return await this.snippetsService.createSnippet({ ...createSnippetInput, userId });
  }

  @UseGuards(JwtGuard)
  @Mutation(() => SnippetEntity)
  async updateSnippet(@Args('updateSnippet') updateSnippetInput: UpdateSnippetInput): Promise<SnippetEntity> {
    return await this.snippetsService.updateSnippet(updateSnippetInput);
  }
}