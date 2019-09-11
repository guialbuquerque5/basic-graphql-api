import { gql } from 'apollo-server-express';


export const typeDefs = gql `
  type User {
    id: ID!
    email: String!
    name: String!
  }

  type Query {
    me: User
  },
  type Mutation{
    register(name: String!, email: String!, password: String!): Boolean!
    login(email: String!, password: String!): User
  }

`;