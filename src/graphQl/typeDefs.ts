import { gql } from 'apollo-server-express';

const typeDefs = gql`
  
  scalar Date
  
  type Project {
    id: String!
    title: String!
    description: String!
    createdAt: Date
  }
  
  input CreateProject {
    title: String!
    description: String!
  }
  
  type Query {
    project(id: String!): Project!
    projects: [Project!]!
  }
  
  type Mutation {
    createProject(input: CreateProject!): Project! 
  }
`;

export default typeDefs;
