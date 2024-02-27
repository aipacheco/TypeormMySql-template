import { Request, Response } from "express"
import { Roles } from "../../models/Roles"
import * as Repository from "./repository"

export const createRole = async (req: Request, res: Response) => {
  // recuperar la info
  console.log(req.body)
  const name = req.body.name

  if (name.length > 50) {
    return res.status(400).json({
      success: false,
      message: "Role name must be under 50 characters",
    })
  }

  try {
    const newRole = await Repository.createRole(name, res)
    return res.status(201).json({
      success: true,
      message: "Role created",
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while creating the role",
    })
  }
}
