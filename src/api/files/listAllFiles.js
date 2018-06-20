export const listAllFiles = () =>
  fetch("https://dev.gyvit.io/api/storage/files/list ", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyOTkyNDQ3OH0.VlEg1kHkXr7xnQmy1TFcw7lNRLvMLtUDY9bpTMYA7dA ",
      "Content-Type": "Content-Type: application/json"
    }
  }).then(res => res.json())
