import { Request, Response } from "express"
import * as Repository from "./repository"

export const createUser = async (req: Request, res: Response) => {
  console.log("en controller", req.body)
  const email = req.body.email
  const password = req.body.password

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
}
