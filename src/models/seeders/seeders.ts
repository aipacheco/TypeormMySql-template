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
  user.password = '$2b$12$L7wl7Gx1pYosqGDbg8p2YOamY3CULz7SGSG6szrpV4Rcem1xNLl.m'
  user.roleId = 1
  return user
}
const generateFakeAdmin =  () => {
  const user = new Users()
  user.first_name = faker.person.firstName()
  user.last_name = faker.person.lastName()
  user.email = "admin@admin.com"
  user.password = '$2b$12$L7wl7Gx1pYosqGDbg8p2YOamY3CULz7SGSG6szrpV4Rcem1xNLl.m'
  user.roleId = 2
  return user
}

const generateFakeSuperAdmin =  () => {
  const user = new Users()
  user.first_name = faker.person.firstName()
  user.last_name = faker.person.lastName()
  user.email = "superdmin@superadmin.com"
  user.password = '$2b$12$L7wl7Gx1pYosqGDbg8p2YOamY3CULz7SGSG6szrpV4Rcem1xNLl.m'
  user.roleId = 3
  return user
}


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

    const fakeAdmin =  generateFakeAdmin()
    await Users.save(fakeAdmin)

    const fakeSuperAdmin =  generateFakeSuperAdmin()
    await Users.save(fakeSuperAdmin)

    console.log("TODO OK EN SEEDER")
  } catch (error) {
    console.log(error)
  }  finally {
    await AppDataSource.destroy()
  }
}


seedDatabase()
