import gql from 'graphql-tag'

export const schema = gql`
  type Poem {
    id: Int!
    createdAt: DateTime!
    title: String!
    published: Boolean!
    author: User!
    authorId: Int!
    categories: Category
  }

  type Query {
    poems: [Poem!]!
  }

  input CreatePoemInput {
    title: String!
    published: Boolean!
    authorId: Int!
  }

  input UpdatePoemInput {
    title: String
    published: Boolean
    authorId: Int
  }
`
