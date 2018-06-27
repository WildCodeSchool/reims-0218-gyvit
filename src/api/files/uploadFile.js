import { getToken } from "../users/localStorageToken"

export const uploadFile = data => {
  const request = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "http://localhost:3000"
    },
    body: JSON.stringify(data)
  }

  return fetch("https://dev.gyvit.io/api/storage/files", request).then(res =>
    res.json()
  )
}
