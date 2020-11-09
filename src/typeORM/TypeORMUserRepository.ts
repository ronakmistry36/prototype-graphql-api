import { EntitySchema, Repository } from 'typeorm';
import UserRepository from '../repository/UserRepository';
import UserEntity from '../entity/UserEntity';
import TypeORMConnection from './TypeORMConnection';

const TypeORMUserEntitySchema = new EntitySchema<UserEntity>({
  name: 'user',
  columns: {
    id: {
      type: String,
      primary: true,
    },
    email: {
      type: String,
      nullable: false,
    },
    firstName: {
      type: String,
      nullable: false,
    },
    lastName: {
      type: String,
      nullable: false,
    },
  },
});

class TypeORMUserRepository implements UserRepository {
  private repository: Repository<UserEntity>;

  constructor() {
    this.repository = TypeORMConnection.Instance.getRepository(TypeORMUserEntitySchema);
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

export default TypeORMUserRepository;
