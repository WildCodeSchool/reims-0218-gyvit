export const listAllFiles = () =>
  fetch("https://dev.gyvit.io/api/storage/files/list", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcyNTAyMH0.dgVTGliH4ag6IChVgwsqjctmsMlwalY_3sqoSPQu0c8",
      "Content-Type": "Content-Type: application/json"
    }
  })
    .then(res => res.json())
    .then(data => console.log("LIST ALL FILES===>", data))
