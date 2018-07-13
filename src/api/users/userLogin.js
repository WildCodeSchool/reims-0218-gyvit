import { storeToken, removeToken } from "./localStorageToken"
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
      //stock token in localStorage storeToken()
      if (response.success) {
        storeToken(response.data.token)
      } else {
        removeToken()
      }
      return response
    })
}
