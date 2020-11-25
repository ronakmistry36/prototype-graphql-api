import {Resolver, Query, Mutation, Arg} from "type-graphql";
import {UserEntity} from "../typeORM/UserEntity";
import {CreateUserCommand} from "./commands/CreateUserCommand";

@Resolver()
export class UserResolver {

  @Query(() => [UserEntity])
  users() {
    return UserEntity.find();
  }

  @Mutation(() => UserEntity)
  async createUser(@Arg("data") data: CreateUserCommand) {
    const user = UserEntity.create(data);
    await user.save();
    return user;
  }
}
