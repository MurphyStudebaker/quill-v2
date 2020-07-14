import gql from 'graphql-tag'

export const schema = gql`
  type User {
    id: Int!
    email: String!
    name: String
    poems: [Poem]
    profile: Profile
  }

  type Query {
    users: [User!]!
    user(id: Int!): User!
  }

  input CreateUserInput {
    email: String!
    name: String
  }

  input UpdateUserInput {
    id: Int
    email: String
    name: String
  }

  type Mutation {
    createUser(input: CreateUserInput): User
    updateUser(input: UpdateUserInput): User
  }
`
