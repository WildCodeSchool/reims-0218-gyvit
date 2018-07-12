import { getToken } from "./localStorageToken"
const axios = require("axios")

const config = {
  baseURL: "https://dev.gyvit.io/api/",
  method: "get",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`
  }
}

/**
 *
 * @returns {{object:"account",_id:{string},mail:{string},firstname:{string},lastname:{string},role:{string},active:{number},created:{string},modified:{string}}}: acct object for user
 */

export const retrieveMe = () =>
  axios({
    ...config,
    url: `user/me`
  }).then(res => res.data)
