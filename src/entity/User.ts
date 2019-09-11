import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable, Unique} from "typeorm";
import {Channel} from './Channel'
import { Category } from "./Category";
import * as bcrypt from "bcryptjs";

export enum UserType {
  PAGE = "page",
  PERSONAL = "personal",
  BRAND = "brand"
}

@Entity()
@Unique(['email'])
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: UserType,
    default: UserType.PERSONAL
  })

  @ManyToMany(type => Channel)
  @JoinTable()
  channels: Channel[]

  @ManyToMany(type => Category)
  @JoinTable()
  categories: Category[]


  hashPassword() {
      this.password = bcrypt.hashSync(this.password, 8);
    }
  
  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
