import { getToken } from "../users/localStorageToken"
const axios = require("axios")

const config = {
  baseURL: "https://dev.gyvit.io/api/",
  method: "get",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    Authorization: `Bearer ${getToken()}`
  }
}

export const listAllDir = value =>
  axios({
    ...config,
    url: `storage/directorys/list?name=${value}`
  }).then(res => res.data)
