const request = {
  method: "get",
  headers: new Headers({
    Accept: "application/json"
  })
}

export const retrieveMe = () =>
  fetch("https://dev.gyvit.io/api/user/me", request).then(res => res.json)
