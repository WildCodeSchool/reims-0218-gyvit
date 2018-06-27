import { getToken } from "../users/localStorageToken"

export const retrieveDir = (_id = "dir_y62kpDwkqmS2oD2USqc8") =>
  fetch(`https://dev.gyvit.io/api/storage/directorys/${_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      Authorization: `Bearer ${getToken()}`
    }
  }).then(res => res.json())
