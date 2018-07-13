import { getToken } from "../users/localStorageToken"
const axios = require("axios")

export const uploadFile = data => {
  const config = {
    baseURL: "https://dev.gyvit.io/api/",
    method: "post",
    headers: {
      Accept: "multipart/form-data",
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "http://localhost:3000"
    },
    data: data
  }

  return axios({
    ...config,
    url: `storage/files`,
    data: JSON.stringify({ data })
  }).then(res => res.data)
}
