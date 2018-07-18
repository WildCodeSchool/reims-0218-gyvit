import { getToken } from "../users/localStorageToken"
const axios = require("axios")

export const createDir = (name, destination) => {
  const config = {
    url: "storage/directorys",
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    }
  }
  return axios({
    ...config,
    data: JSON.stringify({ name, destination })
  }).then(res => res.data)
}
