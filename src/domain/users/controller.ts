import { Request, Response } from "express"
import * as Repository from "./repository"
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"



export const getUsers = async () => {
  let resultado = await Repository.getUsers()
  return resultado
}

export const getSingleUser = async (req: Request, res: Response) => {
  //se accede al id a traves de req.params.id
  const userId = req.params.id
  //se le pasa parseado
  const user = await Repository.getSingleUser(parseInt(userId))
  //si lo que devuelve repository es null
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    })
    //si viene el usuario relleno
  } else {
    return user
  }
}


