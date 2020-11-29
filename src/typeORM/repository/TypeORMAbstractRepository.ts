import {EntitySchema, getConnection, Repository} from "typeorm";

abstract class TypeORMAbstractRepository<Entity> {

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

  public async save(entity: Entity) {
    const repository = await this.repositoryInstance();
    await repository.save(entity);
  }
}

export default TypeORMAbstractRepository;
