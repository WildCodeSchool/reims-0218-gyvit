import { getToken } from "../users/localStorageToken"
const axios = require("axios")

export const retrieveRoot = () => {
  const config = {
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      Authorization: `Bearer ${getToken()}`
    }
  }

  return axios({
    ...config,
    url: `storage/directorys`
  }).then(res => res.data)
}
