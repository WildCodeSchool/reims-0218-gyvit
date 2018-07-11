import { getToken } from "../users/localStorageToken"

export const updateDir = (name, dirId) =>
  fetch(`https://dev.gyvit.io/api/storage/directorys/${dirId}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify({ name, dirId })
  }).then(res => res.json())
