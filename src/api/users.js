const user = "https://dev.gyvit.io/api/user/token"

fetch(user, {
  method: "post",
  headers: new Headers({
    Accept: "application/json",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcyNTAyMH0.dgVTGliH4ag6IChVgwsqjctmsMlwalY_3sqoSPQu0c8",
    "Content-Type": "Content-Type: application/json"
  })
})
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)
  })
