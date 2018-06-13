import { storeToken } from "./localStorageToken"
import { retrieveMe } from "./retrieveMe"

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
      //stock token in localStorage storeToken()
      if (response.success === true) {
        storeToken(response.data.token)
      }
      return response
    })
    .then(response => retrieveMe())
    //.then(response => console.log(response))

    //promise not resolved
    .catch(response => {})
}

//retourner le json
//retrieve me dans signincontainer
