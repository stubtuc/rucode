import { graphql } from '../../__generated__/gql'

const snippetsService = {
  getSnippetById: graphql(`
    query getSnippetById($id: Float!) {
        getSnippetById(id: $id) {
            html
            css
            js
            name
            userId
        }
    }  
  `),
  createSnippet: graphql(`
    mutation createSnippet($snippet: CreateSnippetInput!) {
      createSnippet(createSnippet: $snippet) {
        name
        html
        css
        js
        id
        userId
      }
    }
  `),
  updateSnippet: graphql(`
    mutation updateSnippet($snippet: UpdateSnippetInput!) {
      updateSnippet(updateSnippet: $snippet) {
        id
        name
        html
        css
        js
        userId
      }
    }
  `)
}

export const { getSnippetById, createSnippet, updateSnippet } = snippetsService;