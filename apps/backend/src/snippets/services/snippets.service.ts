import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { SnippetEntity } from "src/snippets/entities/snippet.entity";
import { CreateSnippetInput } from "src/snippets/inputs/create-snippet.input";
import { UpdateSnippetInput } from "src/snippets/inputs/update-snippet.input";

@Injectable()
export class SnippetsService {
  constructor(
    @InjectRepository(SnippetEntity)
    private readonly snippetRepository: Repository<SnippetEntity>
  ) {}

  async getAllSnippets(): Promise<SnippetEntity[]> {
    return await this.snippetRepository.find();
  }

  async getSnippetById(id: number): Promise<SnippetEntity> {
    return await this.snippetRepository.findOneBy({ id });
  }


  async createSnippet(createSnippetInput: CreateSnippetInput): Promise<SnippetEntity> {
    return await this.snippetRepository.save(createSnippetInput);
  }

  async updateSnippet(updateSnippetInput: UpdateSnippetInput): Promise<SnippetEntity> {
    return await this.snippetRepository.save({ ...updateSnippetInput, id: parseInt(updateSnippetInput.id as any as string) })
  }
}