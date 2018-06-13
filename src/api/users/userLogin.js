import { storeToken } from "./localStorageToken"
import { retrieveMe } from "./retrieveMe"

export const userLogin = (mail, password) => {
  const user = {
    mail,
    password
  }
  console.log(user)
  const request = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }
  fetch("https://dev.gyvit.io/api/user/token", request)
    .then(res => res.json())
    .then(response => {
      //stock token in localStorage storeToken()
      if (response.success === true) {
        storeToken(response.data.token)
      }
      return response
    })
    .then(response => retrieveMe())

    //promise not resolved
    .catch(response => {})
}

//retourner le json
//retrieve me dans signincontainer
