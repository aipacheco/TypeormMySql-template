import { Request, Response } from "express"

export const createRole = async (req: Request, res: Response) => {
    // recuperar la info
    console.log(req.body)
    const name = req.body.name
}