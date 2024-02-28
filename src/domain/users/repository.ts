import { Users } from "../../models/Users"

export const createUser = async (user:any) => {

//   console.log("en repository", user)

  const email: string = user.email
  const findEmail = await Users.findOneBy({ email: email })
  
 if (!findEmail) {
  const newUser = await Users.create(user).save()

  console.log("newuser en el repository", newUser)
  return undefined
    } else {
      return findEmail
    }
}
