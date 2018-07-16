import { getToken } from "../users/localStorageToken"
const axios = require("axios")

const config = {
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  method: "delete",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`
  }
}

export const deleteDirectory = (dirId, dirName) =>
  axios({
    ...config,
    data: JSON.stringify({ name: dirName }),
    url: `storage/directorys/${dirId}`
  }).then(res => res.data)
