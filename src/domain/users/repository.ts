import { Users } from "../../models/Users"

export const getUsers = async () => {
  const users = await Users.find({
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
    },
  })
  return users
}

export const createUser = async (user: any) => {
  const email: string = user.email
  const findEmail = await Users.findOneBy({ email: email })

  //si no existe, lo crea y no retorna nada o undefined para mandar el response en controller
  if (!findEmail) {
    const newUser = await Users.create(user).save()
    return undefined
  } else {
    return findEmail
  }
}

export const getSingleUser = async (userId: number) => {
  const user = await Users.findOneBy({ id: userId })
  //lo retornamos como esté, se va a encargar router de dar la respuesta
  return user
}
