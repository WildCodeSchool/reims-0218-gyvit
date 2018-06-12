const tokenLocale =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcyNTAyMH0.dgVTGliH4ag6IChVgwsqjctmsMlwalY_3sqoSPQu0c8"
/**
 * @param name, a string for a directory
 * @returns an object Directory with files[] and dirs[] properties
 */

// fetching the _id of the directory
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
