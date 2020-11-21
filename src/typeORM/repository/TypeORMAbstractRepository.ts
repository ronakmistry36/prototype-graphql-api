import Repository from "../../repository/Repository";
import {EntityTarget} from "typeorm/common/EntityTarget";
import {getConnection, Repository as TypeORMRepository} from "typeorm";

class TypeORMAbstractRepository<Entity> implements Repository<Entity> {

  private readonly repository: TypeORMRepository<Entity>;

  constructor(entity: EntityTarget<Entity>) {
    this.repository = getConnection().getRepository(entity);
  }

  delete(id: string): Promise<boolean> {
    return Promise.resolve(false);
  }

  findAll(): Promise<Entity[]> {
    return Promise.resolve([]);
  }

  findById(id: string): Promise<Entity> {
    return Promise.resolve(null as unknown as Entity);
  }

  save(entity: Entity): Promise<Entity> {
    return this.save(entity);
  }

  saveAll(entity: Entity[]): Promise<Entity[]> {
    return Promise.resolve([]);
  }

}

export default TypeORMAbstractRepository;
