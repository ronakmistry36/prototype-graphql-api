import { EntitySchema, Repository, getRepository } from 'typeorm';
import UserRepository from '../repository/UserRepository';
import UserEntity from '../entity/UserEntity';

export const TypeORMUserEntitySchema = new EntitySchema<UserEntity>({
  name: 'user',
  columns: {
    id: {
      type: string,
      primary: true,
    },
    email: {
      type: string,
      nullable: false,
    },
    firstName: {
      type: string,
      nullable: false,
    },
    lastName: {
      type: string,
      nullable: false,
    },
  },
});

class TypeORMUserRepository implements UserRepository {
  private repository: Repository<UserEntity>;

  constructor() {
    this.repository = getRepository(TypeORMUserEntitySchema);
  }

  save(entity: UserEntity): Promise<UserEntity> {
    return this.repository.save(entity);
  }

  findOne(id: string): Promise<UserEntity | undefined> {
    return this.repository.findOne(id);
  }

  findAll(): Promise<UserEntity[]> {
    return this.repository.find();
  }
}

export default TypeORMUserEntitySchema;
