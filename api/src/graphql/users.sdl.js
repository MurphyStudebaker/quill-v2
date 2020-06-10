import gql from 'graphql-tag'

export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String
    poems: Poem
    profile: Profile
  }

  type Query {
    users: [User!]!
  }

  input CreateUserInput {
    email: String!
    name: String
  }

  input UpdateUserInput {
    email: String
    name: String
  }
`
