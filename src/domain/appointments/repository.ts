import { Request } from "express"
import { Appointments } from "../../models/Appointments"
import { Users } from "../../models/Users"

export const getMyAppointments = async (req: Request) => {
  const user = await Users.findOneBy({ id: req.tokenData.userId })
  if (user) {
    const citas = await Appointments.find({

      relations: {
        user: true,
        service: true
    },
      select: {
      id: true,
      appointment_date: true,
      service: {
        id: true,
        serviceName: true,
        //no trae los nombres de los servicios
      },
 },

    })

    return citas
  }
}
