import gql from 'graphql-tag'

export const schema = gql`
  type Poem {
    id: Int!
    title: String!
    body: String!
    published: Boolean!
    author: User
    authorId: Int
    categories: Category
    snaps: Int
  }

  type Query {
    poems: [Poem!]!
    poem(id: Int!): Poem!
    poemsByUser(id: Int!): [Poem!]!
  }

  input CreatePoemInput {
    title: String!
    body: String!
    published: Boolean!
    authorId: Int
  }

  input UpdatePoemInput {
    id: Int
    title: String
    body: String
    published: Boolean
    snaps: Int
    authorId: Int
  }

  type Mutation {
    createPoem(input: CreatePoemInput!): Poem!
    updatePoem(input: UpdatePoemInput!): Poem!
    deletePoem(id: Int!): Poem!
  }
`
