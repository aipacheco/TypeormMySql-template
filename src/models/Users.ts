import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Roles } from "./Roles"
import { Appointments } from "./Appointments"

@Entity("users")
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ name: "first_name" })
  first_name!: string

  @Column({ name: "last_name" })
  last_name!: string

  @Column({ name: "password" })
  password!: string

  @Column({ name: "email" })
  email!: string


  @ManyToOne(() => Roles, (role) => role.users)
  @JoinColumn({ name: 'role_id' })
  role_id!: Roles;

  @OneToMany(() => Appointments, (appointment) => appointment.user)
  appointments!: Appointments[]
}
