import { getToken } from "../users/localStorageToken"
const axios = require("axios")

export const updateFile = (name, fileId) => {
  const config = {
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    method: "patch",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    }
  }
  return axios({
    ...config,
    url: `storage/files/${fileId}`,
    data: JSON.stringify({ name, fileId })
  }).then(res => res.data)
}
