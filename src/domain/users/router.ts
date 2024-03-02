import express from "express"
import * as Controller from "./controller"
import { isSuperAdmin } from "../../middlewheres/isSuperAdmin"
import { auth } from "../../middlewheres/auth"

const userRouter = express.Router()

// endpoints de usuario
userRouter.get("/users", auth, isSuperAdmin, Controller.getUsers)
userRouter.put("/users/profile", auth, Controller.updateProfile)
userRouter.get("/users/profile", auth, Controller.userProfile)


export default userRouter
