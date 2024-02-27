import { app } from "./server"
import express from "express"
import { AppDataSource } from "./models/db"

app.use(express.json()) //para convertir a json los datos recibidos

app.get("/hello", (req, res) => {
  res.status(200).json({ success: true, msg: "server is ok" })
})

