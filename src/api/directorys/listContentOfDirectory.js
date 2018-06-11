const tokenLocale =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcyNTAyMH0.dgVTGliH4ag6IChVgwsqjctmsMlwalY_3sqoSPQu0c8"

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
    .then(directory => {
      fetch(`https://dev.gyvit.io/api/storage/directorys/${directory._id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + tokenLocale,
          "Content-Type": "application/json"
        }
      }).then(res => res.json())
    })
