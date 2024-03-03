import { Request, Response } from "express"
import * as Repository from "./repository"

export const getServices = async (req: Request, res: Response) =>{

    try {
        const resultado = await Repository.getServices()
  
        return res.status(200).json({
          success: true,
          message: "All services",
          data: resultado,
        })
      } catch (error) {
        return res.status(500).json({
          success: false,
          message: "Error interno del servidor",
        })
      }
}
export const createService = (req: Request, res: Response) =>{
    
}
export const updateService = (req: Request, res: Response) =>{
    
}