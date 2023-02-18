import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { UserEntity } from "src/users/entities/user.entity";

@ObjectType()
@Entity('snippets')
export class SnippetEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  html: string;

  @Field()
  @Column()
  css: string;

  @Field()
  @Column()
  js: string;

  @Field()
  @Column()
  userId: number;

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity)
  user: UserEntity;
}