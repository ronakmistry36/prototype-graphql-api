import {QueryResolvers} from "./graphql";
import ProjectRepository from "../typeORM/repository/ProjectRepository";

const resolvers: QueryResolvers = {
  Query: {
    projects: () => new ProjectRepository().findAll(),
    project: (_parent, args, _context) => new ProjectRepository().findById(args.id)
  }
}

export default resolvers;
