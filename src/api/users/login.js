//TODO: API connection of POST Login

export const userLogin = () =>
  fetch("https://dev.gyvit.io/api/user/token", {
    method: "post",
    headers: new Headers({
      Accept: "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcyNTAyMH0.dgVTGliH4ag6IChVgwsqjctmsMlwalY_3sqoSPQu0c8",
      "Content-Type": "Content-Type: application/json"
    })
  }).then(res => res.json())
