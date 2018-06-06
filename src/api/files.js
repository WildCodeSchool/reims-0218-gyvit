const url = "https://dev.gyvit.io/api/storage/files/file_7F2jhzx5RlO8u5C1SP3c"

const headersFiles = new Headers({
  curl: "request GET ",
  url: "https://dev.gyvit.io/api/storage/files/file_7F2jhzx5RlO8u5C1SP3c",
  header: "Accept: application/json",
  header:
    "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcyNTAyMH0.dgVTGliH4ag6IChVgwsqjctmsMlwalY_3sqoSPQu0c8",
  header: "Content-Type: application/json"
})
fetch(url, headersFiles).then(res => {
  console.log(res.json())
})
