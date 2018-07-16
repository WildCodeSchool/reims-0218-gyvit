import { getToken } from "../users/localStorageToken"
const axios = require("axios")

const config = {
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  method: "patch",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`
  }
}

export const updateDir = (name, dirId) => {
  return axios({
    ...config,
    url: `storage/directorys/${dirId}`,
    data: JSON.stringify({ name, dirId })
  }).then(res => {
    return res.data
  })
}
