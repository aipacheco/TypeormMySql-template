import { Request, Response } from "express"
import { Roles } from "../../models/Roles"

export const createRole = async (req: Request, res: Response) => {
    const newRole = await Roles.create({
        name: name,
      }).save()
    
}
