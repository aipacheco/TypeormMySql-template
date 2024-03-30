import { faker } from "@faker-js/faker"
import { Roles } from "../Roles"
import { Users } from "../Users"
import { Services } from "../Services"
import { AppDataSource } from "../db"
import bcrypt from "bcrypt"
import { Appointments } from "../Appointments"

// Función para generar usuarios falsos con Faker
const generateFakeUser = () => {
  const user = new Users()
  user.first_name = faker.person.firstName()
  user.last_name = faker.person.lastName()
  user.email = faker.internet.email()
  user.password = bcrypt.hashSync("123456789", 12)
  user.avatar = faker.image.avatar()
  user.roleId = 1
  return user
}
const generateFakeAdmin = () => {
  const user = new Users()
  user.first_name = faker.person.firstName()
  user.last_name = faker.person.lastName()
  user.email = "admin@admin.com"
  user.password = bcrypt.hashSync("123456789", 12)
  user.avatar = faker.image.avatar()
  user.roleId = 2
  return user
}

const generateFakeSuperAdmin = () => {
  const user = new Users()
  user.first_name = faker.person.firstName()
  user.last_name = faker.person.lastName()
  user.email = "superdmin@superadmin.com"
  user.password = bcrypt.hashSync("123456789", 12)
  user.avatar = faker.image.avatar()
  user.roleId = 3
  return user
}

const generateFakeAppointments =  () => {
  const serviceId = faker.number.int({ min: 1, max: 6 })
  const userId = faker.number.int({ min: 1, max: 10 })

  const appointment = new Appointments()
  appointment.appointment_date = faker.date.future()

  const service = new Services
  service.id = serviceId

  const user = new Users
  user.id = userId

  appointment.user =  user 
  appointment.service = service 

  return appointment
}

interface ServiceInterface {
  serviceName: string
  description: string
  image:string
}

const services: ServiceInterface[] = [
  {
    serviceName: "Tatuaje Personalizado",
    description:
      "Diseños personalizados de tatuajes que se adaptan a tus ideas y estilo único.",
      image: "https://images.pexels.com/photos/4125659/pexels-photo-4125659.jpeg"
  },
  {
    serviceName: "Piercing Corporal",
    description:
      "Servicios profesionales de piercing en diversas áreas del cuerpo, realizados con el máximo cuidado y con equipamiento esterilizado.",
      image: "https://belliata.com/uploads/s/siteadmin/13824fa07e_piercing-vertical-en-la-ceja.png"

  },
  {
    serviceName: "Tatuaje de Realismo",
    description:
      "Especialización en tatuajes realistas, capturando la esencia y detalle de las imágenes y fotografías.",
      image:"https://zbcscrwjqlygjzrqvdcu.supabase.co/storage/v1/object/public/tattoox/faef744f-3a6c-4118-9930-a7915fd84b4c/5e43e7eb-9392-4b22-a6a6-b954c3793950.image"
  },
  {
    serviceName: "Cover-Up de Tatuajes",
    description:
      "Transformación y mejoramiento de tatuajes previos, cubriendo y renovando tatuajes antiguos o no deseados.",
      image: "https://images.unsplash.com/photo-1597852075234-fd721ac361d3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    serviceName: "Microdermal",
    description:
      "Piercings microdermales que ofrecen una alternativa moderna y menos invasiva para adornar tu cuerpo.",
      image: "https://rollandfeel.smokingpaper.com/wp-content/uploads/elementor/thumbs/piercing-microdermal-quitar-pzsbylnew04z7wy86i62patal4hkbpvegiqvjmfbpu.jpg"
  },
  {
    serviceName: "Eliminación de Tatuajes",
    description:
      "Servicio de eliminación de tatuajes con tecnología láser, para aquellos que desean borrar su tinta.",
      image: "https://metime-public.s3.eu-central-1.amazonaws.com/shutterstock_655533991_cced427a25.jpg"
  },
]

const seedDatabase = async () => {
  try {
    await AppDataSource.initialize()

    const role = new Roles()
    role.name = "user"
    role.id = 1
    await role.save()

    const roleAdmin = new Roles()
    roleAdmin.name = "admin"
    roleAdmin.id = 2
    await roleAdmin.save()

    const roleSuperAdmin = new Roles()
    roleSuperAdmin.name = "super_admin"
    roleSuperAdmin.id = 3
    await roleSuperAdmin.save()

    const fakeUsers = Array.from({ length: 10 }, generateFakeUser)
    await Users.save(fakeUsers)

    const fakeAdmin = generateFakeAdmin()
    await Users.save(fakeAdmin)

    const fakeSuperAdmin = generateFakeSuperAdmin()
    await Users.save(fakeSuperAdmin)

    //mapeo para meter los servicios en la tabla Services
    for (const serviceItem of services) {
      let service = new Services()
      service.serviceName = serviceItem.serviceName
      service.description = serviceItem.description
      await Services.save(service)
    }

    const fakeAppointments = Array.from(
      { length: 50 },
      generateFakeAppointments
    )
    await Appointments.save(fakeAppointments)

    console.log("TODO OK EN SEEDER")
  } catch (error) {
    console.log(error)
  } finally {
    await AppDataSource.destroy()
  }
}

seedDatabase()
