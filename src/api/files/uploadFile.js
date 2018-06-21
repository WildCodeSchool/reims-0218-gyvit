import { getToken } from "../users/localStorageToken"

export const uploadFile = (name, destination, file) => {
  const createFile = {
    name,
    destination,
    file
  }
  const data = new FormData()

  const request = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getToken()}`,
      "Content-Type":
        "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
      "Access-Control-Allow-Origin": "http://localhost:3000"
    },
    body: data
  }

  return fetch("https://dev.gyvit.io/api/storage/files", request).then(res =>
    res.json()
  )
}
