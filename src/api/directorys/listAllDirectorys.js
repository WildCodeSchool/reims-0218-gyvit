import { getToken } from "../users/localStorageToken"

export const listAllDir = value =>
  fetch(`https://dev.gyvit.io/api/storage/directorys/list?name=${value}`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      Authorization: `Bearer ${getToken()}`
    }
  }).then(res => res.json())
