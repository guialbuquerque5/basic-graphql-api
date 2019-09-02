import { gql } from 'apollo-server-express';

/*
type FilterOption{
  id: ID!,
  name: String!
}

type FilterContainer{
  id: ID!,
  name: String!,
  options: [FilterOption!]!
}
*/
export const typeDefs = gql `
  type User {
    id: ID!
    email: String!
    name: String!
  }

  type Query {
    #filterContainers: [FilterContainer!]!,
    me: User
  },
  type Mutation{
    register(name: String!, email: String!, password: String!): Boolean!
    login(email: String!, password: String!): User
  }

`;