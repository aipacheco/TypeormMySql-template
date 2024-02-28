import { Request, Response } from "express"
import * as Controller from "./controller"

export const getUsers = async (req: Request, res: Response) => {
  try {
    const usuarios = await Controller.getUsers()
    return res.status(200).json({
      success: true,
      message: "Users in DB",
      data: usuarios,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    })
  }
}

export const createUser = async (req: Request, res: Response) => {
  //si hay body y las keys vienen rellenas (no es un objeto vacío)
  if (req.body && Object.keys(req.body).length !== 0) {
    try {
      await Controller.createUser(req, res)
    } catch (error) {
      //error del servidor
      console.error("error en router", error)
      res.status(500).json({
        success: false,
        message: "An error occurred creating the user.",
      })
    }
  } else {
    //si viene vacío
    res.status(400).json({
      success: false,
      message: "No data provided.",
    })
  }
}

export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id
//se lo pasamos a controller para pasarlo de ahí a repository
    const singleUser = await Controller.getSingleUser(parseInt(userId))
   //si ha venido como null (porque no lo encuentra repository)
    if (!singleUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
      //si viene el usuario relleno
    } else {
      return res.status(200).json({
        success: true,
        message: `User ID: ${userId}`,
        data: singleUser,
      })
    }
    //manejo de errores del servidor
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "server error",
    })
  }
}
