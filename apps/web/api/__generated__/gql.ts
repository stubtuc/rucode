/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n        mutation register($user: RegisterInput!) {\n            register(registerInput: $user) {\n                id\n                email\n                name\n            }\n        }\n    ": types.RegisterDocument,
    "\n        mutation login($user: LoginInput!) {\n          login(loginInput: $user) {\n            access_token\n            id\n          }\n        }\n    ": types.LoginDocument,
    "\n    query getSnippetById($id: Float!) {\n        getSnippetById(id: $id) {\n            html,\n            css,\n            js,\n            name\n        }\n    }  \n  ": types.GetSnippetByIdDocument,
    "\n    mutation updateSnippet($snippet: UpdateSnippetInput!) {\n      updateSnippet(updateSnippet: $snippet) {\n        id,\n        name,\n        html,\n        css,\n        js,\n        userId\n      }\n    }\n  ": types.UpdateSnippetDocument,
    "\n    query getAllUsers {\n        getAllUsers {\n            id,\n            name,\n            email,\n            createdAt,\n            updatedAt,\n            projects {\n                id,\n                name,\n                html,\n                css,\n                js\n            }\n        }\n    }\n  ": types.GetAllUsersDocument,
    "\n    query getUserById($id: Float!) {\n        getUserById(id: $id) {\n            id,\n            name,\n            projects {\n                id,\n                name,\n                html,\n                css,\n                js\n            }\n        }\n    }\n  ": types.GetUserByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation register($user: RegisterInput!) {\n            register(registerInput: $user) {\n                id\n                email\n                name\n            }\n        }\n    "): (typeof documents)["\n        mutation register($user: RegisterInput!) {\n            register(registerInput: $user) {\n                id\n                email\n                name\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation login($user: LoginInput!) {\n          login(loginInput: $user) {\n            access_token\n            id\n          }\n        }\n    "): (typeof documents)["\n        mutation login($user: LoginInput!) {\n          login(loginInput: $user) {\n            access_token\n            id\n          }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getSnippetById($id: Float!) {\n        getSnippetById(id: $id) {\n            html,\n            css,\n            js,\n            name\n        }\n    }  \n  "): (typeof documents)["\n    query getSnippetById($id: Float!) {\n        getSnippetById(id: $id) {\n            html,\n            css,\n            js,\n            name\n        }\n    }  \n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation updateSnippet($snippet: UpdateSnippetInput!) {\n      updateSnippet(updateSnippet: $snippet) {\n        id,\n        name,\n        html,\n        css,\n        js,\n        userId\n      }\n    }\n  "): (typeof documents)["\n    mutation updateSnippet($snippet: UpdateSnippetInput!) {\n      updateSnippet(updateSnippet: $snippet) {\n        id,\n        name,\n        html,\n        css,\n        js,\n        userId\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getAllUsers {\n        getAllUsers {\n            id,\n            name,\n            email,\n            createdAt,\n            updatedAt,\n            projects {\n                id,\n                name,\n                html,\n                css,\n                js\n            }\n        }\n    }\n  "): (typeof documents)["\n    query getAllUsers {\n        getAllUsers {\n            id,\n            name,\n            email,\n            createdAt,\n            updatedAt,\n            projects {\n                id,\n                name,\n                html,\n                css,\n                js\n            }\n        }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getUserById($id: Float!) {\n        getUserById(id: $id) {\n            id,\n            name,\n            projects {\n                id,\n                name,\n                html,\n                css,\n                js\n            }\n        }\n    }\n  "): (typeof documents)["\n    query getUserById($id: Float!) {\n        getUserById(id: $id) {\n            id,\n            name,\n            projects {\n                id,\n                name,\n                html,\n                css,\n                js\n            }\n        }\n    }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;