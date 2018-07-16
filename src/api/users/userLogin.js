import { getToken, storeToken, removeToken } from "./localStorageToken"
const axios = require("axios")

export const userLogin = (mail, password) => {
  const user = {
    mail,
    password
  }
  const config = {
    baseURL: "https://dev.gyvit.io/api/",
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }
  return axios({
    ...config,
    url: `user/token`,
    data: JSON.stringify(user)
  })
    .then(res => {
      return res.data
    })
    .then(response => {
      console.log("response deuxieme then du userLogin: ", response)
      //stock token in localStorage storeToken()
      if (response.success) {
        storeToken(response.data.token)
        console.log("token APRES storeToken du userLogin: ", getToken())
      } else {
        removeToken()
      }
      return response
    })
}
