import { Request } from "express"
import { Appointments } from "../../models/Appointments"
import { Users } from "../../models/Users"

export const getMyAppointments = async (req: Request) => {
  const user = await Users.findOneBy({ id: req.tokenData.userId })

  if (user) {
    const citas = await Appointments.find({

      select: ["id", "appointment_date", "service"],
    })

    return citas
  }
}
