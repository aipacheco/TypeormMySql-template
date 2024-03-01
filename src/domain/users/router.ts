import express from "express"
import * as Controller from "./controller"
import { isSuperAdmin } from "../../middlewheres/isSuperAdmin"
import { auth } from "../../middlewheres/auth"

const userRouter = express.Router()

// endpoints de usuario
 userRouter.get("/users",auth, isSuperAdmin, Controller.getUsers)
 //esta routa debe ir primero para que no coja la ruta dinámica de :id
 userRouter.put("/users/profile", auth, Controller.updateProfile)

export default userRouter

