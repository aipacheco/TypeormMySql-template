import express from "express"
import * as Controller from "./controller"
import { isSuperAdmin } from "../../middlewheres/isSuperAdmin"
import { auth } from "../../middlewheres/auth"

const userRouter = express.Router()

// endpoints de usuario
userRouter.get("/users", auth, isSuperAdmin, Controller.getUsers)

userRouter.put("/users/profile", auth, Controller.updateProfile)
userRouter.get("/users/profile", auth, Controller.userProfile)

//esta routa debe ir primero para que no coja la ruta dinámica de :id
userRouter.get("/users?email=ejemplo@ejemplo.com",auth,isSuperAdmin,Controller.getUsers
)

export default userRouter
