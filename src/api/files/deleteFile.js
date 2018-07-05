import { getToken } from "../users/localStorageToken"

export const deleteFile = (fileId, fileName) =>
  fetch(`https://dev.gyvit.io/api/storage/directorys/${fileId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify({ name: fileName })
  }).then(res => res.json())
