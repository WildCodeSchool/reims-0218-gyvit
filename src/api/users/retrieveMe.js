import { getToken } from "./localStorageToken"

const request = {
  method: "get",
  headers: new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`
  })
}

/**
 *
 * @returns: JSON.stringify of user connected
 */

export const retrieveMe = () =>
  fetch("https://dev.gyvit.io/api/user/me", request)
    .then(res => res.json())
    .then(user => {
      console.log(`retrieveMe : ${JSON.stringify(user)}`)
      return user
    })
