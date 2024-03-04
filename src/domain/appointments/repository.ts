import { Request } from "express"
import { Appointments } from "../../models/Appointments"
import { Users } from "../../models/Users"
import { Services } from "../../models/Services"

export const getMyAppointments = async (req: Request) => {
  const user = await Users.findOneBy({ id: req.tokenData.userId })
  if (user) {
    const citas = await Appointments.find({
      relations: {
        user: true,
        service: true,
      },
      select: {
        id: true,
        appointment_date: true,
        service: {
          id: true,
          serviceName: true,
        },
      },
    })
    return citas
  } //todo else
}

export const createAppointment = async (req: Request) => {
  // const user = await Users.findOneBy({ id: req.tokenData.userId })
  // const service = await Services.findOneBy({ id: req.body.service_id })

  // console.log("User:", user)
  // console.log("Service:", service)

  // if (user && service) {
    const newAppointment = {
      appointment_date: req.body.appointment_date,
      user_id: 13,
      service_id: 1,
    }

    console.log("New appointment:", newAppointment)
    try {
      const crearCita = await Appointments.create(newAppointment).save()
      console.log("en repository", crearCita)
    } catch (error) {
      console.log(error)
    }
  }
// }
