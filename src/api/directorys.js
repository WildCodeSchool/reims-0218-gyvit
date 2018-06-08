export const listAllDir = () =>
  fetch("https://dev.gyvit.io/api/storage/directorys/list?name=amm", {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcyNTAyMH0.dgVTGliH4ag6IChVgwsqjctmsMlwalY_3sqoSPQu0c8"
    }
  })
    .then(res => res.json())
    .then(data => console.log("LIST ALL DIRECTORY===>", data))
