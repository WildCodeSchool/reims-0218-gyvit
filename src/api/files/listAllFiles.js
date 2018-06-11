const tokenLocale =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcyNTAyMH0.dgVTGliH4ag6IChVgwsqjctmsMlwalY_3sqoSPQu0c8"
export const listAllFiles = () =>
  fetch(`https://dev.gyvit.io/api/storage/files/list?`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + tokenLocale,
      "Content-Type": "Content-Type: application/json"
    }
  }).then(res => res.json())
