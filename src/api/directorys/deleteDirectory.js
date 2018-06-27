import { getToken } from "../users/localStorageToken"

export const deleteDirectory = (_id = "dir_y62kpDwkqmS2oD2USqc8") =>
  fetch(`https://dev.gyvit.io/api/storage/directorys/${_id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      Authorization: `Bearer ${getToken()}`
    }
  }).then(res => res.json())
