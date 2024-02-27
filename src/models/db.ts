import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm"
import { Roles1708952337364 } from "./migrations/Roles"
import { Users1708948450323 } from "./migrations/Users"
import { Services1709024097884 } from "./migrations/Services"
import { Appointments1709024653887 } from "./migrations/Appointmens"
import { Roles } from "./Roles"
import { Users } from "./Users"
import { Services } from "./Services"
import { Appointments } from "./Appointments"

//aqui van las tablas, en migrations, para poderlas usar posteriormente
export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Roles, Users, Services, Appointments],
  migrations: [
    Roles1708952337364,
    Users1708948450323,
    Services1709024097884,
    Appointments1709024653887,
  ],
  synchronize: false,
  logging: false,
})
