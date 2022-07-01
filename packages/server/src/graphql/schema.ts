import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input AuthInput {
    login: String
    password: String
  }

  type Auth {
    token: String
  }

  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
  type Mutation {
    singIn(input: AuthInput!): Auth
  }
`;
