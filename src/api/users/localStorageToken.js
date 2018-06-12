export const storeToken = token => {
  localStorage.setItem("token", token)
}

export const recallToken = () => {
  return localStorage.getItem("token")
}
