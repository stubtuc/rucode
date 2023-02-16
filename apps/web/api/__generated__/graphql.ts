/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CreateSnippetInput = {
  css: Scalars['String'];
  html: Scalars['String'];
  js: Scalars['String'];
  name: Scalars['String'];
  userId: Scalars['Float'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  /** Generated access_token of the user */
  access_token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSnippet: SnippetEntity;
  createUser: UserEntity;
  deleteUser: UserEntity;
  updateSnippet: SnippetEntity;
  updateUser: UserEntity;
};


export type MutationCreateSnippetArgs = {
  createSnippet: CreateSnippetInput;
};


export type MutationCreateUserArgs = {
  createUser: CreateUserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
};


export type MutationUpdateSnippetArgs = {
  updateSnippet: UpdateSnippetInput;
};


export type MutationUpdateUserArgs = {
  updateUser: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  getAllSnippets: Array<SnippetEntity>;
  getAllUsers: Array<UserEntity>;
  getSnippetById: SnippetEntity;
  getUserById: UserEntity;
  login: LoginOutput;
  register: UserEntity;
};


export type QueryGetSnippetByIdArgs = {
  id: Scalars['Float'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Float'];
};


export type QueryLoginArgs = {
  loginInput: LoginInput;
};


export type QueryRegisterArgs = {
  registerInput: RegisterInput;
};

export type RegisterInput = {
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type SnippetEntity = {
  __typename?: 'SnippetEntity';
  createdAt: Scalars['DateTime'];
  css: Scalars['String'];
  html: Scalars['String'];
  id: Scalars['ID'];
  js: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: UserEntity;
  userId?: Maybe<Scalars['Float']>;
};

export type UpdateSnippetInput = {
  css?: InputMaybe<Scalars['String']>;
  html?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  js?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserEntity = {
  __typename?: 'UserEntity';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  projects: Array<SnippetEntity>;
  updatedAt: Scalars['DateTime'];
};

export type GetSnippetByIdQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetSnippetByIdQuery = { __typename?: 'Query', getSnippetById: { __typename?: 'SnippetEntity', html: string, css: string, js: string, name?: string | null } };

export type UpdateSnippetMutationVariables = Exact<{
  snippet: UpdateSnippetInput;
}>;


export type UpdateSnippetMutation = { __typename?: 'Mutation', updateSnippet: { __typename?: 'SnippetEntity', id: string, name?: string | null, html: string, css: string, js: string, userId?: number | null } };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers: Array<{ __typename?: 'UserEntity', id: string, name?: string | null, email: string, createdAt: any, updatedAt: any, projects: Array<{ __typename?: 'SnippetEntity', id: string, name?: string | null, html: string, css: string, js: string }> }> };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUserById: { __typename?: 'UserEntity', id: string, name?: string | null, projects: Array<{ __typename?: 'SnippetEntity', id: string, name?: string | null, html: string, css: string, js: string }> } };


export const GetSnippetByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSnippetById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSnippetById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","name":{"kind":"Name","value":"css"}},{"kind":"Field","name":{"kind":"Name","value":"js"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetSnippetByIdQuery, GetSnippetByIdQueryVariables>;
export const UpdateSnippetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateSnippet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"snippet"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSnippetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSnippet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateSnippet"},"value":{"kind":"Variable","name":{"kind":"Name","value":"snippet"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","name":{"kind":"Name","value":"css"}},{"kind":"Field","name":{"kind":"Name","value":"js"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<UpdateSnippetMutation, UpdateSnippetMutationVariables>;
export const GetAllUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","name":{"kind":"Name","value":"css"}},{"kind":"Field","name":{"kind":"Name","value":"js"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetUserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"html"}},{"kind":"Field","name":{"kind":"Name","value":"css"}},{"kind":"Field","name":{"kind":"Name","value":"js"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;