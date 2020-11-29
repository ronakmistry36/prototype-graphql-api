import {EntitySchema, getConnection, Repository} from "typeorm";
import EntityRepository from "./EntityRepository";

abstract class TypeORMAbstractRepository<Entity> implements EntityRepository<Entity> {

  private _repository: Repository<Entity>;
  private readonly _entitySchema: EntitySchema<Entity>;

  protected constructor(entitySchema: EntitySchema<Entity>) {
    this._entitySchema = entitySchema;
  }

  private async repositoryInstance() {
    if (!this._repository) {
      const typeORMConnection = await getConnection();
      this._repository = typeORMConnection.getRepository<Entity>(this._entitySchema);
    }
    return this._repository;
  }

  public save(entity: Entity): void {
    this.repositoryInstance()
      .then((repository) => repository.save(entity))
      .catch((error) => console.log("Error while saving entity", error));
  }

  delete(id: string): void {
    this.repositoryInstance()
      .then((repository) => repository.delete(id))
      .catch((error) => console.log("Error while saving entity", error));
  }

  exists(id: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.repositoryInstance()
        .then(async (repository) => {
          const entity = await repository.findOne(id);
          resolve(entity !== undefined);
        })
        .catch((error) => {
          console.log("Error while finding entity", error)
          reject(error);
        })
    });
  }

  findAll(): Promise<Entity[]> {
    return new Promise<Entity[]>((resolve, reject) => {
      this.repositoryInstance()
        .then(async (repository) => {
          const entities = await repository.find();
          resolve(entities);
        })
        .catch((error) => {
          console.log("Error while finding entities", error)
          reject(error);
        })
    });
  }

  findById(id: string): Promise<Entity> {
    return new Promise<Entity>((resolve, reject) => {
      this.repositoryInstance()
        .then(async (repository) => {
          const entity = await repository.findOneOrFail(id);
          resolve(entity);
        })
        .catch((error) => {
          console.log("Error while finding entity", error)
          reject(error);
        })
    });
  }
}

export default TypeORMAbstractRepository;
