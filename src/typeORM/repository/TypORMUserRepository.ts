import {getConnection} from "typeorm";
import UserEntity from "../entity/UserEntity";

const TypORMUserRepository = getConnection().getRepository(UserEntity);

export default TypORMUserRepository;
