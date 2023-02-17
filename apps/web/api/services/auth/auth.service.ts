import { graphql } from '../../__generated__/gql';

const authService = {
    register: graphql(`
        mutation register($user: RegisterInput!) {
            register(registerInput: $user) {
                id
                email
                name
            }
        }
    `),
    login: graphql(`
        mutation login($user: LoginInput!) {
          login(loginInput: $user) {
            access_token
            id
          }
        }
    `)
}

export const { register, login } = authService;