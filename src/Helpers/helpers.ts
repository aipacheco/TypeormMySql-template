//la función recibe dos params, el valor que le pasemos y el campo para usarlo en el mensaje
export const validator = (value: string, field: string) => {
  if (typeof value !== "string") {
    return `${field} must be a valid character (a to z).`
  }
  //si es menor de 3 letras
  if (value.length < 3) {
    return `${field} must be at least 3 characters long.`
  }
  //si es mayor de 50 letras
  if (value.length > 50) {
    return `${field} must be less than 50 characters.`
  }
}

export const isValidLongText = (value: string, field: string) =>{
  if (typeof value !== "string") {
    return `${field} must be a valid character (a to z).`
  }
  if (value.length < 10) {
    return `${field} must be at least 10 characters long.`
  }
  //si es mayor de 50 letras
  if (value.length > 300) {
    return `${field} must be less than 300 characters.`
  }

}

//esta función solo recibe un param porque el mensaje es siempre del password
export const isValidPassword = (password: string) => {
  if (password.length < 8 || password.length > 15) {
    return "Password must be min 8 or max 15 chars."
  }
}

export const isValidEmail = (email: string) => {
  if (email.length < 0) {
    return "You have to provide an email."
  }
  //regex de email
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
  if (!validEmail.test(email)) {
    return "format email invalid"
  }
}
