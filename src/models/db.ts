import "reflect-metadata"
import "dotenv/config"
import { DataSource } from "typeorm"
import { Roles1708952337364 } from "./migrations/Roles"
import { Users1708948450323 } from "./migrations/Users"


//aqui van las tablas, en migrations, para poderlas usar posteriormente
export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [],
  migrations: [
    Roles1708952337364,
    Users1708948450323
  ],
  synchronize: false,
  logging: false,
})
