import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input SingInInput {
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
  type Profile {
    name: String
    patronymic: String
    surname: String
  }

  type Query {
    me: Profile
    books: [Book]
  }
  type Mutation {
    singIn(input: SingInInput!): Auth
  }
`;
