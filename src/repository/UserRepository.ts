import UserEntity from '../entity/UserEntity';
import EntityRepository from './EntityRepository';

interface UserRepository extends EntityRepository<UserEntity> {}

export default UserRepository;
