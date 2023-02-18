import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateSnippetInput {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  html: string;

  @Field({ nullable: true })
  css: string;

  @Field({ nullable: true })
  js: string;

  @Field({ nullable: true })
  name: string;

  @Field()
  userId: number;
}