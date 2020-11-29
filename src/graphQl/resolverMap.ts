import {QueryResolvers} from "./graphql";
import ProjectRepository from "../typeORM/repository/ProjectRepository";

const resolvers: QueryResolvers = {
  Query: {
    projects: () => new ProjectRepository().findAll()
  }
}

export default resolvers;
