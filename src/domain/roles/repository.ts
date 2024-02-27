import { Request, Response } from "express"
import { Roles } from "../../models/Roles"

export const createRole = async (name: string, res: Response) => {
  const newRole = await Roles.create({
    name: name,
  }).save()
  return newRole
}
