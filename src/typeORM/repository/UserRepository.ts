import {EntitySchema, getRepository} from 'typeorm';
import User from '../../domain/User';

const UserEntity = new EntitySchema<User>({
  name: 'user',
  columns: {
    id: {
      type: String,
      primary: true,
      generated: true
    },
    email: {
      type: String,
      unique: true,
      nullable: false
    },
    firstName: {
      type: String,
      nullable: false
    },
    lastName: {
      type: String,
      nullable: false
    }
  }
});

export default getRepository<User>(UserEntity)
