import TypeORMAbstractRepository from "./TypeORMAbstractRepository";
import ProjectEntity from "../entity/ProjectEntity";
import Project from "../../domain/Project";

class ProjectRepository extends TypeORMAbstractRepository<Project> {

  constructor() {
    super(ProjectEntity);
  }
}

export default ProjectRepository;
