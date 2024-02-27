import { Request, Response } from "express"
import { Roles } from "../../models/Roles"

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

  const newRole = await Roles.create({
    name: name,
  }).save()

  
  res.status(201).json({
    succes: true,
    message: "Role created",
    data: newRole,
  })
}
