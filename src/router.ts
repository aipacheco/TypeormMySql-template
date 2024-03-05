import appointmentRouter from "./domain/appointments/router"
import authRouter from "./domain/auth/router"
import roleRouter from "./domain/roles/router"
import serviceRouter from "./domain/services/router"
import userRouter from "./domain/users/router"
import express, { Application } from "express"

export const app: Application = express()

app.use(express.json()) //para convertir a json los datos recibidos


app.get("/hello", (req, res) => {
  res.status(200).json({ success: true, msg: "server is ok" })
})

//rutas de roles
app.use("/api", roleRouter)

//rutas de auth
app.use("/api/auth", authRouter)

//rutas de user
app.use("/api", userRouter)

//rutas de services
app.use("/api", serviceRouter)

//rutas de appointments
app.use("/api", appointmentRouter)
