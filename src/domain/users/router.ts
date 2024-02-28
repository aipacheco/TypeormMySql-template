import { Request, Response } from "express"
import * as Controller from "./controller"

export const createUser = async (req: Request, res: Response) => {

  //si hay body y las keys vienen rellenas (no es un objeto vacío)
  if (req.body && Object.keys(req.body).length !== 0) {
    try {
      await Controller.createUser(req, res)
    } catch (error) {
      //error del servidor
      console.error("error en router",error)
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
