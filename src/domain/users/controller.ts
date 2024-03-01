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
  const first_name: string = req.body.first_name
  const last_name: string = req.body.last_name
  const password: string = req.body.password

  //flag booleana para controlar que pase las validaciones
  let validations: boolean = true

  if (first_name) {
    if (typeof first_name !== "string") {
      validations = false
      return res.status(400).json({
        success: false,
        message: "name must be a valid character (a to z).",
      })
    }

    if (first_name.length < 3) {
      validations = false
      return res.status(400).json({
        success: false,
        message: "name must be at least 3 characters long.",
      })
    }
    if (first_name.length > 50) {
      validations = false
      return res.status(400).json({
        success: false,
        message: "name must be less than 50 characters.",
      })
    }
  }

  if (last_name) {
    if (typeof last_name !== "string") {
      validations = false
      return res.status(400).json({
        success: false,
        message: "last name must be a valid character (a to z).",
      })
    }
    if (last_name.length < 3) {
      validations = false
      return res.status(400).json({
        success: false,
        message: "last name must be at least 3 characters long.",
      })
    }

    if (last_name.length > 50) {
      validations = false
      return res.status(400).json({
        success: false,
        message: "last name must be less than 50 characters.",
      })
    }
  }
  if (password) {
    if (password.length < 8 || password.length > 15) {
      return res.status(400).json({
        success: false,
        message: "Password must be min 8 or max 15 chars.",
      })
    }
  }

  console.log(validations)

  if (validations) {
    //si pasa las validaciones
    try {
      //le paso el req a repository para que tenga los datos y el token
      let resultado = await Repository.updateProfile(req)
      if (resultado) {
        return res.status(201).json({
          success: true,
          message: "Profile updated",
        })
      }
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        success: false,
        message: "Error interno del servidor",
      })
    }
  } else {
    return res.status(500).json({
      success: false,
      message: "Data provided not valid",
    })
  }
}
