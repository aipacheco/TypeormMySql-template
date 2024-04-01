import express from "express"
import * as Controller from "./controller"
import { isSuperAdmin } from "../../middlewares/isSuperAdmin"
import { auth } from "../../middlewares/auth"

const userRouter = express.Router()

// endpoints de usuario
userRouter.get("/users", auth, isSuperAdmin, Controller.getUsers)
userRouter.get("/users/profile", auth, Controller.userProfile)
userRouter.put("/users/profile", auth, Controller.updateProfile)
userRouter.put("/users/:id", auth, isSuperAdmin,  Controller.InactiveUser)



export default userRouter
