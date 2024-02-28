import { Request, Response } from "express"
import * as Repository from "./repository"
import bcrypt from "bcrypt"

export const getUsers = async () => {
  let resultado = await Repository.getUsers()
  return resultado
}

export const createUser = async (req: Request, res: Response) => {
  const firstName = req.body.first_name
  const lastName = req.body.last_name
  const password = req.body.password
  const email = req.body.email

  //validaciones
  if (password.length < 8 || password.length > 15) {
    return res.status(400).json({
      success: false,
      message: "Password must be min 8 or max 15 chars.",
    })
  }
  if (email.length < 0) {
    return res.status(400).json({
      success: false,
      message: "You have to provide an email.",
    })
  }
  //regex de email
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
  if (!validEmail.test(email)) {
    return res.status(400).json({
      success: false,
      message: "format email invalid",
    })
  }

  //encriptación de password
  const passEncript: string = bcrypt.hashSync(password, 12)

  const NewUser = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: passEncript,
    role_id: 1,
  }

  try {
    const result = await Repository.createUser(NewUser)

    //si llega vacío es que se ha creado en repository, lo traemos para mandar el response
    if (!result) {
      return res.status(201).json({
        success: true,
        message: "User created",
      })

      //si se recibe un obj de tipo User, es que ya existía el registro
    } else {
      return res.status(400).json({
        success: false,
        message: "email duplicated in DB",
      })
    }
    //manejo de errores del servidor
  } catch (error) {
    console.log("el error en controller", error)
    return res.status(500).json({
      success: false,
      message: "An error occurred while creating the user",
    })
  }
}

export const getSingleUser = async (userId: number) => {
  try {
    const user = await Repository.getSingleUser(userId)
    //en este caso lo vamos a pasar a router aunque esté vacío para que router de la respuesta
    //porque no le puedo pasar como params el res
    return user
  } catch (error) {
    throw error
  }
}
