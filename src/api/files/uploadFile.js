import { getToken } from "../users/localStorageToken"

export const uploadFile = (name, destination, file) => {
  const createFile = {
    name,
    destination,
    file
  }

  const request = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getToken()}`,
      "Content-Type":
        "Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
    },
    body: JSON.stringify(createFile)
  }

  return fetch("https://dev.gyvit.io/api/storage/files", request).then(res =>
    res.json()
  )
}
