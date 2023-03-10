import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class RegisterInput {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  name: string;
}