import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { SnippetEntity } from "src/snippets/entities/snippet.entity";

@ObjectType()
@Entity('users')
export class UserEntity {
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
  email: string;

  @Field()
  @Column()
  password: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field(() => [SnippetEntity])
  @OneToMany(() => SnippetEntity, (snippet) => snippet.user)
  @JoinColumn({ referencedColumnName: 'userId' })
  projects: SnippetEntity[];
}