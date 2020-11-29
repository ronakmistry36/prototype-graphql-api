import { IResolvers } from 'graphql-tools';

const resolvers: IResolvers = {
  Query: {
    greeting: () => "Hello World.."
  }
}

export default resolvers;
