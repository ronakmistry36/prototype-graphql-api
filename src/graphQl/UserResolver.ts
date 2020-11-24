import { Resolver, Query } from "type-graphql";

@Resolver()
export class UserResolver {

  @Query(() => String)
  helloWorld() {
    return "Hello World";
  }
}
