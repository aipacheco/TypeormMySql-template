import express from "express"
import * as Controller from "./controller"
import { isSuperAdmin } from "../../middlewheres/isSuperAdmin"
import { auth } from "../../middlewheres/auth"

const serviceRouter = express.Router()

// endpoints de servicios
serviceRouter.get("/services", Controller.getServices)
serviceRouter.post("/services", auth, isSuperAdmin, Controller.createService)



export default serviceRouter
