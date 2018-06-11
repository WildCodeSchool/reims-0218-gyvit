//TODO: API connection of GET List all files

export const listAllFiles = () =>
  fetch("https://dev.gyvit.io/api/storage/files/list", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "Content-Type: application/json"
    }
  }).then(res => res.json())
