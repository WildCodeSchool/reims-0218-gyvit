import { getToken } from "../users/localStorageToken"
const axios = require("axios")

export const uploadFile = data => {
  const config = {
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
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
  }).then(res => {
    console.log("res end of uploadFile: ", res)
    return res.data
  })
}
