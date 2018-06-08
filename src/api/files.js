const files = "https://dev.gyvit.io/api/storage/directorys/list?name=amm"

fetch(files, {
  method: "POST",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
    "Content-Type": "Content-Type: application/json"
  }
})
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)
  })
