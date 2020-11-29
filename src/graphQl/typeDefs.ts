import { gql } from 'apollo-server-express';

const typeDefs = gql`
  
  scalar Date
  
  type Project {
    id: String!
    title: String!
    description: String!
    createdAt: Date
  }
  
  type Query {
    project(id: String!): Project!
    projects: [Project!]!
  }
`;

export default typeDefs;
