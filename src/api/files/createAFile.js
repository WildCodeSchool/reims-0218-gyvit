const tokenLocale =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcyNTAyMH0.dgVTGliH4ag6IChVgwsqjctmsMlwalY_3sqoSPQu0c8"

export const createAFile = (name, destination, file) =>
  fetch("https://dev.gyvit.io/api/storage/files", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + tokenLocale,
      "Content-Type": "application/json",
      body: { name: name, destination: destination, file: file }
    }
  }).then(res => res.json())
