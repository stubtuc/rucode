import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateSnippetInput {
  @Field()
  html: string;

  @Field()
  css: string;

  @Field()
  js: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  userId: number;
}