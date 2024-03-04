import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Services } from "./Services"
import { Users } from "./Users"

@Entity("appointments")
export class Appointments extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number

  @Column({ name: "appointment_date", type: "date" })
  appointment_date!: Date

  @ManyToOne(() => Services, (service) => service.appointments)
  @JoinColumn({ name: "service_id" })
  service!: Services

  @ManyToOne(() => Users, (user) => user.appointments)
  @JoinColumn({ name: "user_id" })
  user!: Users
}
