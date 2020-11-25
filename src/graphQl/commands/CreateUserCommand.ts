import {Field, InputType} from "type-graphql";

@InputType()
export class CreateUserCommand {

  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
