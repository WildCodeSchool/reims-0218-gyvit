import { recallToken } from "./localStorageToken"

export const userLogin = (mail, password) => {
  const token = recallToken()

  fetch("https://dev.gyvit.io/api/user/token", {
    method: "post",
    headers: new Headers({
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "Content-Type: application/json"
    }),
    body: {
      mail,
      password
    }
  }).then(res => res.json())
}
