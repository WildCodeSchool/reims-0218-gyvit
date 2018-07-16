import { getToken } from "./localStorageToken"
const axios = require("axios")

/**
 *
 * @returns {{object:"account",_id:{string},mail:{string},firstname:{string},lastname:{string},role:{string},active:{number},created:{string},modified:{string}}}: acct object for user
 */

export const retrieveMe = () => {
  const config = {
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    url: `user/me`,
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    }
  }
  console.log("token AVANT axios du retrieveMe: ", getToken())
  return axios(config)
    .then(res => {
      console.log("res then APRES axios retrieveMe: ", res)
      return res.data // returning the account
    })
    .catch(res => {
      console.log("res catch axios retrieveMe: ", res)
      return res
    })
}
