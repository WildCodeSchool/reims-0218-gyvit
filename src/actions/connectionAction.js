export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"

export const isUserAction = response => ({
  type: FETCH_USER_SUCCESS,
  user: response.data.user,
  token: response.data.token
})
