import express, { Application } from "express"
import dotenv from "dotenv"
dotenv.config()
import { AppDataSource } from "./models/db"



export const app: Application = express()

const PORT = process.env.PORT || 4001


AppDataSource.initialize()
  .then(()=>{
    console.log("daatabase conected")
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
    
  })
  .catch(error=>console.log(error))


