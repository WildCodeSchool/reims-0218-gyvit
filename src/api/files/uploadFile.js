import { getToken } from "../users/localStorageToken"

export const uploadFile = (name, destination, file) => {
  const file = {
    name,
    destination,
    file
  }

  fetch("https://dev.gyvit.io/api/storage/ ", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getToken()}`,
      "Content-Type":
        "Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW"
    },
    body: JSON.stringify(file)
  }).then(res => res.json())
}
