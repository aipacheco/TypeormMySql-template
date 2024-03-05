import { Request, Response } from "express"
import * as Repository from "./repository"
import { isArrayEmpty } from "../../Helpers/helpers"

export const getMyAppointments = async (req: Request, res: Response) => {
  try {
    const citas: any = await Repository.getMyAppointments(req)

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
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    })
  }
}

export const createAppointment = async (req: Request, res: Response) => {
  // Si hay un cuerpo en la solicitud y no es un objeto vacío
  if (req.body && Object.keys(req.body).length !== 0) {
    const dataAppointment = req.body.appointment_date
    const serviceID = req.body.service_id

    console.log(dataAppointment)
    // Validaciones
  
    // Llamar a la función en el repositorio para crear la cita

    const nuevaCita = await Repository.createAppointment(req)

    if (!nuevaCita) {
      return res.status(400).json({
        success: false,
        message: "error al crear la cita",
      })
    } else {
      return res.status(201).json({
        success: true,
        message: nuevaCita,
      })
    }
  } else {
    // Si se manda un objeto vacío
    res.status(400).json({
      success: false,
      message: "No data provided.",
    })
  }
}

export const updateAppointment = async(req: Request, res: Response) =>{

}

export const getSingleAppointments = async(req: Request, res: Response) =>{

}