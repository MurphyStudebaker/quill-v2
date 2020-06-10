import gql from 'graphql-tag'

export const schema = gql`
  type Profile {
    id: Int!
    bio: String!
    user: User!
    userId: Int!
  }

  type Query {
    profiles: [Profile!]!
  }

  input CreateProfileInput {
    bio: String!
    userId: Int!
  }

  input UpdateProfileInput {
    bio: String
    userId: Int
  }
`
