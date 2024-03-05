import express from "express"
import * as Controller from "./controller"
import { isSuperAdmin } from "../../middlewheres/isSuperAdmin"
import { auth } from "../../middlewheres/auth"

const appointmentRouter = express.Router()

// endpoints de citas
appointmentRouter.get("/appointments", auth, Controller.getMyAppointments)
appointmentRouter.post("/appointments", auth, Controller.createAppointment)
appointmentRouter.put("/appointments:id", auth, Controller.updateAppointment)
appointmentRouter.get("/appointments", auth, Controller.getSingleAppointments)



export default appointmentRouter
