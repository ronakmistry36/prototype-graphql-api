import {EntitySchema} from "typeorm";
import Project from "../../domain/Project";

const ProjectEntity: EntitySchema = new EntitySchema<Project>({
  name: 'project',
  columns: {
    id: {
      type: String,
      primary: true,
      generated: "uuid"
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    createdAt: {
      type: Date,
      nullable: false
    }
  }
});

export default ProjectEntity;
