import { storeToken, removeToken } from "./localStorageToken"

export const userLogin = (mail, password) => {
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

  return fetch("https://dev.gyvit.io/api/user/token", request)
    .then(res => res.json())
    .then(response => {
      console.log(response)
      //stock token in localStorage storeToken()
      if (response.success) {
        storeToken(response.data.token)
      } else {
        removeToken()
      }
      return response
    })
}
