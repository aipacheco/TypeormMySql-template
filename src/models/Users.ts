import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Roles } from "./Roles"

@Entity("users")
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number
  @Column({ name: "first_name" })
  firstName!: string
  @Column({ name: "last_name" })
  lastName!: string
  @Column({ name: "password" })
  password!: string
  @Column({ name: "email" })
  email!: string
  @Column({ name: "created_at" })
  createdAt!: Date
  @Column({ name: "update_at" })
  updatedAt!: Date
  @Column({ name: "is_active" })
  isActive!: boolean 

  @ManyToMany(() => Roles, (role) => role.users)
  @JoinColumn({ name: "role_id" })
  role!: Roles
}
