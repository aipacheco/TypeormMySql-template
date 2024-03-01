import { Roles } from "../Roles"
import { AppDataSource } from "../db"

const roleSeedDatabase = async () => {
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

    console.log("TODO OK EN SEEDER")

  } catch (error) {
    console.log(error)
  } finally {
    await AppDataSource.destroy()
  }
}
roleSeedDatabase()
