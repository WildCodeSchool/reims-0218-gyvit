const url = "https://dev.gyvit.io/api/storage/directorys/list?name=amm"

fetch(url, {
  method: "get",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    Authorization: "Bearer " + localStorage.getItem("token")
  }
})
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)
  })
