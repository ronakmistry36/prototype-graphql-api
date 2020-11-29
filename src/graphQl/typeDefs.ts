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
    projects: [Project!]!
  }
`;

export default typeDefs;
