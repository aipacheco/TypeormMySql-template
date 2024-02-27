import { Request, Response } from "express"
import * as Controller from "./controller"

//se recibe request desde el front y se le devuelve una response que va a venir desde controller
export const createRole = async (req: Request, res: Response) => {
  console.log(req.body)
  Controller.createRole(req, res)
  return res
}
