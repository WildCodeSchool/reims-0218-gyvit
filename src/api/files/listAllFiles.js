import { getToken } from "../users/localStorageToken"

export const listAllFiles = () =>
  fetch("https://dev.gyvit.io/api/storage/files/list ", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "Content-Type: application/json"
    }
  }).then(res => res.json())
