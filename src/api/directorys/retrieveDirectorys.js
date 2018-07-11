import { getToken } from "../users/localStorageToken"
const axios = require("axios")
const root = "dir_k8G3aBS8TSWv9zEDj5ao"

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

export const retrieveDir = (_id = root) =>
  axios({
    ...config,
    url: `storage/directorys/list?name=${_id}`
  }).then(res => res.data)
