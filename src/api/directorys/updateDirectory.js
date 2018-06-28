import { getToken } from "../users/localStorageToken"

export const updateDirectory = (_id = "dir_y62kpDwkqmS2oD2USqc8", name) =>
  fetch(`https://dev.gyvit.io/api/storage/directorys/${_id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify({ name })
  }).then(res => res.json())
