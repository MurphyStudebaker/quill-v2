import gql from 'graphql-tag'

export const schema = gql`
  type Category {
    id: Int!
    name: String!
    posts: Poem
  }

  type Query {
    categories: [Category!]!
  }

  input CreateCategoryInput {
    name: String!
  }

  input UpdateCategoryInput {
    name: String
  }
`
