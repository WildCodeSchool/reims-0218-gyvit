import { getToken } from "../users/localStorageToken"

export const uploadFile = data => {
  const request = {
    method: "POST",
    headers: {
      Accept: "multipart/form-data",
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "http://localhost:3000"
    },
    body: data
  }

  return fetch("https://dev.gyvit.io/api/storage/files", request).then(res =>
    res.json()
  )
}
