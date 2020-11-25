import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Field, ID, ObjectType} from "type-graphql";

@Entity()
@ObjectType()
export class UserEntity extends BaseEntity {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column({ nullable: false, unique: true })
  email: string;

  @Field(() => String)
  @Column({ nullable: false })
  firstName: string;

  @Field(() => String)
  @Column({ nullable: false })
  lastName: string;
}
