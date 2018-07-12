import { getToken } from "../users/localStorageToken"

export const updateFile = (name, fileId) => {
  return fetch(`https://dev.gyvit.io/api/storage/files/${fileId}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify({ name, fileId })
  }).then(res => res.json())
}
