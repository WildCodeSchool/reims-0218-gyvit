import { getToken } from "../users/localStorageToken"

export const updateDirectory = name => {
  const destination = this.state.currentDir._id
  fetch(`https://dev.gyvit.io/api/storage/directorys/${destination}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify({ name })
  }).then(res => res.json())
}
