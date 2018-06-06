export const FETCH_USER_CONNECTION_SUCCESS = "FETCH_USER_SUCCESS"
export const DISCONNECT_USER_SUCCESS = "DISCONNECT_USER_SUCCESS"

export const makeUserAction = response => ({
  type: FETCH_USER_CONNECTION_SUCCESS,
  user: response.data.user
})

export const disconnectUserAction = () => ({
  type: DISCONNECT_USER_SUCCESS,
  user: ""
})
