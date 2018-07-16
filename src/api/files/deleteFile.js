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

export const deleteFile = (fileId, fileName) => {
  return axios({
    ...config,
    url: `storage/files/${fileId}`,
    data: JSON.stringify({ name: fileName })
  }).then(res => res.data)
}
