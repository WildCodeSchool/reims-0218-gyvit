const urlUser = "https://dev.gyvit.io/api/user/token"

const headersUsers = new Headers({
  curl: "request POST",
  url: "https://dev.gyvit.io/api/user/token",
  header: "Content-Type: application/json",
  data: {
    mail: "romain@meduza-studio.com",
    password: "meduza"
  }
})
fetch(urlUser, headersUsers)
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)
  })
