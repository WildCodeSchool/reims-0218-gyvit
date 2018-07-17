import { getToken } from "../users/localStorageToken"
const axios = require("axios")

const config = {
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  method: "get",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${getToken()}`,
    "Content-Type": "Content-Type: application/json"
  }
}

export const listAllFiles = () =>
  axios({
    ...config,
    url: `storage/files/list`
  }).then(res => res.data)
