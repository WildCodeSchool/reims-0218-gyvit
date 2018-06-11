// TODO: All Action in connection with login

export const CONNECT_USER_SUCCESS = "CONNECT_USER_SUCCESS"
export const DISCONNECT_USER_SUCCESS = "DISCONNECT_USER_SUCCESS"

export const connectUserSuccessAction = response => ({
  type: CONNECT_USER_SUCCESS,
  user: response.data.user
})

export const disconnectUserSuccessAction = () => ({
  type: DISCONNECT_USER_SUCCESS,
  user: ""
})
