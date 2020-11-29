import {QueryResolvers} from "./graphql";

const resolvers: QueryResolvers = {
  Query: {
    greeting: () => "Hello World.."
  }
}

export default resolvers;
