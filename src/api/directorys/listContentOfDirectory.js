const tokenLocale =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyOTQxMTc4N30.6wgxFKtJAF4D3j4NSCy1aRIbjrEzIN1od2B_ylJFfGQ"

/**
 * @param name, a string for a directory
 * @returns an object Directory with files[] and dirs[] properties
 */

export const listContentOfDirectory = name =>
  fetch(`https://dev.gyvit.io/api/storage/directorys/list?name=${name}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + tokenLocale,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    // result of listAllDirectory that matches name is an array
    .then(directory => {
      fetch(`https://dev.gyvit.io/api/storage/directorys/${directory[0]._id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + tokenLocale,
          "Content-Type": "application/json"
        }
      }).then(res => res.json())
    })
