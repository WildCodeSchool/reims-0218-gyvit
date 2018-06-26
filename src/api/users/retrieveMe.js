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
 * @returns {{object:"account",_id:{string},mail:{string},firstname:{string},lastname:{string},role:{string},active:{number},created:{string},modified:{string}}}: acct object for user
 */

export const retrieveMe = () =>
  fetch("https://dev.gyvit.io/api/user/me", request)
    .then(res => res.json())
    .then(user => {
      return user
    })
