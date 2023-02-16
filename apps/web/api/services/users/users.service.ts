import { graphql } from '../../__generated__/gql'

const usersService = {
  getAllUsers: graphql(`
    query getAllUsers {
        getAllUsers {
            id,
            name,
            email,
            createdAt,
            updatedAt,
            projects {
                id,
                name,
                html,
                css,
                js
            }
        }
    }
  `),
  getUserById: graphql(`
    query getUserById($id: Float!) {
        getUserById(id: $id) {
            id,
            name,
            projects {
                id,
                name,
                html,
                css,
                js
            }
        }
    }
  `)
}

export const { getAllUsers, getUserById } = usersService;