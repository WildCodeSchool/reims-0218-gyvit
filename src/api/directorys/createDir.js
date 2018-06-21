import { getToken } from "../users/localStorageToken"

export const createDir = (name, destination) =>
  fetch(`https://dev.gyvit.io/api/storage/directorys`, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: { name, destination }
  }).then(res => res.json())
