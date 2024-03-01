import { Request } from "express"
import { Users } from "../../models/Users"
import { TokenData } from "../../types/index"

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
  // const user = await Users.findOneBy({ id: req.body.id })
  // if (user) {
    const user = Users.update({
      id: req.tokenData.userId,
    },
    {
      first_name: req.body.name
    }
    )
    return user
  }

// }
