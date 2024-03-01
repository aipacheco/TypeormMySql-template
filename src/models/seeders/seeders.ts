import { faker } from "@faker-js/faker"
import { Roles } from "../Roles"
import { Users } from "../Users"
import { AppDataSource } from "../db"

// Función para generar usuarios falsos con Faker
const generateFakeUser =  () => {
  const user = new Users()
  user.first_name = faker.person.firstName()
  user.last_name = faker.person.lastName()
  user.email = faker.internet.email()
  user.password = "$12$LTD3Zjs1knPG2shso3M98.SOLm9H/YhCri3PZXDvZsR43Tw9hwVue"
  user.roleId = 1
  return user
}


const seedDatabase = async () => {
  try {
    await AppDataSource.initialize()

    const role = new Roles()
    role.name = "user"
    await role.save()

    const roleAdmin = new Roles()
    roleAdmin.name = "admin"
    await role.save()

    const roleSuperAdmin = new Roles()
    roleSuperAdmin.name = "super_admin"
    await role.save()

    const fakeUsers = Array.from({ length: 10 }, generateFakeUser)
    await Users.save(fakeUsers)
    await AppDataSource.destroy()

    console.log("TODO OK EN SEEDER")
  } catch (error) {
    console.log(error)
  }  finally {
    await AppDataSource.destroy()
  }
}


seedDatabase()
