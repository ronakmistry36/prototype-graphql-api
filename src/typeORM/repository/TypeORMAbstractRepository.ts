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

  async delete(id: string): Promise<void> {
    const repository = await this.repositoryInstance();
    try {
      await repository.delete(id);
      return Promise.resolve();
    } catch (error) {
      console.log("Error while deleting entity", error)
      return Promise.reject(error);
    }
  }

  async exists(id: string): Promise<boolean> {
    const repository = await this.repositoryInstance();
    try {
      await repository.findOneOrFail(id);
      return Promise.resolve(true);
    } catch (error) {
      console.log("Error while finding entity", error)
      return Promise.reject(false);
    }
  }

  async findAll(): Promise<Entity[]> {
    const repository = await this.repositoryInstance();
    try {
      const entities = await repository.find();
      return Promise.resolve(entities);
    } catch (error) {
      console.log("Error while finding entity", error)
      return Promise.reject(error);
    }
  }

  async findById(id: string): Promise<Entity> {
    const repository = await this.repositoryInstance();
    try {
      const entity = await repository.findOneOrFail(id);
      return Promise.resolve(entity);
    } catch (error) {
      console.log("Error while finding entity", error)
      return Promise.reject(error);
    }
  }

  async save(entity: Entity): Promise<Entity> {
    const repository = await this.repositoryInstance();
    try {
      const savedEntity = await repository.save(entity);
      return Promise.resolve(savedEntity);
    } catch (error) {
      console.log("Error while saving entity", error)
      return Promise.reject(error);
    }
  }
}

export default TypeORMAbstractRepository;
