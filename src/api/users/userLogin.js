import { storeToken } from "./localStorageToken"

export const userLogin = (mail, password) => {
  console.log(`email:${mail}`, `motdepasse:${password}`)

  const user = {
    mail,
    password
  }
  const request = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }
  console.log(request)
  fetch("https://dev.gyvit.io/api/user/token", request)
    .then(res => res.json())
    .then(response => {
      console.log(response)
      if (response.success === true) {
        storeToken(response.data.token)
      }
      return response
    })
}
//si success est true => stocker le token dans localStorage
//retourner le json
//retrieve me dans signincontainer
