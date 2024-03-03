import { Request } from "express"
import { Services } from "../../models/Services"

export const getServices = async () => {
  const services = await Services.find({
    select: {
      id: true,
      serviceName: true,
      description: true,
    },
  })
  return services
}
