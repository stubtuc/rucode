import { graphql } from '../../__generated__/gql'

const snippetsService = {
  getSnippetById: graphql(`
    query getSnippetById($id: Float!) {
        getSnippetById(id: $id) {
            html,
            css,
            js,
            name
        }
    }  
  `),
  updateSnippet: graphql(`
    mutation updateSnippet($snippet: UpdateSnippetInput!) {
      updateSnippet(updateSnippet: $snippet) {
        id,
        name,
        html,
        css,
        js,
        userId
      }
    }
  `)
}

export const { getSnippetById, updateSnippet } = snippetsService;