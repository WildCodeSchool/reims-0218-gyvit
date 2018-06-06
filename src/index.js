import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

const url = "https://dev.gyvit.io/api/storage/files/list"

fetch(url, {
  method: "POST",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcyNTAyMH0.dgVTGliH4ag6IChVgwsqjctmsMlwalY_3sqoSPQu0c8"
  }
})
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)
  })

/* const urlFiles = "https://dev.gyvit.io/api/storage/directorys/list?name=amm"

fetch(urlFiles, {
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
 */

//const urlUser = "https://dev.gyvit.io/api/user/token"
// const headersUsers = new Headers({
//   curl: "request POST",
//   url: "https://dev.gyvit.io/api/user/token",
//   header: "Content-Type: application/json",
//   data: {
//     mail: "romain@meduza-studio.com",
//     password: "meduza"
//   }
// })
// fetch(urlUser, headersUsers)
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     console.log(data)
//   })

ReactDOM.render(<App />, document.getElementById("root"))
registerServiceWorker()
