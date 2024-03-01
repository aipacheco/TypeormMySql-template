import { Request } from "express"
import { Users } from "../../models/Users"
import bcrypt from "bcrypt"

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

export const updateProfile = async (req: Request) => {
  const user = await Users.findOneBy({ id: req.tokenData.userId })
  if (user) {
    const userUpdate = Users.update(
      {
        id: req.tokenData.userId,
      },
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        /* email: req.body.email no quiero que se pueda cambiar por el usuario
        ya que es un dato único y puede coincidir con otro que tengamos*/
        password: bcrypt.hashSync(req.body.password, 12),
      }
    )
    return userUpdate
  }
}
