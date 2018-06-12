export const retrieveDir = () =>
  fetch(
    "https://dev.gyvit.io/api/storage/directorys/dir_DOl2kN3n9lMeedN90kL9",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3001",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyOTA0NzczMX0.4-eMh0BZWtR0pZeRrnT2ddD1xr6pFhjodM-Cut2cFIA"
      }
    }
  ).then(res => res.json())
