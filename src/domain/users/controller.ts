import { Request, Response } from "express"
import * as Repository from "./repository"

export const getUsers = async (req: Request, res: Response) => {
  try {
    let resultado = await Repository.getUsers()

    return res.status(200).json({
      success: true,
      message: "Users in DB",
      data: resultado,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    })
  }
}

export const updateProfile = async (req: Request, res: Response) => {
  //traemos el body
  const name = req.body.name
  

  //validaciones

  //AQUI LAS VALIDACIONES

  //si pasa las validaciones
  try {
    let resultado = await Repository.updateProfile(name) //PROVISIONAL

    return res.status(201).json({
      success: true,
      message: "Profile updated",
      data: resultado,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    })
  }
}
