const urlFiles = "https://dev.gyvit.io/api/storage/directorys/list?name=amm"

fetch(urlFiles, {
  method: "post",
  headers: {
    Accept: "application/json",
    Authorization:
      "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcyNTAyMH0.dgVTGliH4ag6IChVgwsqjctmsMlwalY_3sqoSPQu0c8",
    "Content-Type": "Content-Type: application/json"
  }
})
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)
  })
