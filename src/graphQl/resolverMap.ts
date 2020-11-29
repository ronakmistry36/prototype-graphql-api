import {QueryResolvers} from "./graphql";
import ProjectRepository from "../typeORM/repository/ProjectRepository";
import {v4 as UUID} from 'uuid';

const resolvers: QueryResolvers = {
  Query: {
    projects: () => new ProjectRepository().findAll(),
    project: (_parent, args, _context) => new ProjectRepository().findById(args.id)
  },
  Mutation: {
    createProject: (_parent, args, _context) => new ProjectRepository().save({
      id: UUID(),
      ...args.input,
      createdAt: new Date()
    })
  }
}

export default resolvers;
