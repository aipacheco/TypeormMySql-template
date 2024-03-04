import { Request, Response } from "express"
import * as Repository from "./repository"
import { isArrayEmpty } from "../../Helpers/helpers"

export const getMyAppointments = async (req: Request, res: Response) => {
  try {
    const citas:any = await Repository.getMyAppointments(req)

    const isCitas = isArrayEmpty(citas)

    if (isCitas) {
      return res.status(400).json({
        success: true,
        message: "no tiene citas",
      })
    } else {
      return res.status(200).json({
        success: true,
        message: citas,
      })
    }
  } catch (error) {}
}
