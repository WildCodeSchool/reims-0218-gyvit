export const CONNECT_USER_SUCCESS = "CONNECT_USER_SUCCESS"
export const DISCONNECT_USER_SUCCESS = "DISCONNECT_USER_SUCCESS"
export const CONNECT_USER_FAIL = "CONNECT_USER_FAIL"

export const connectUserSuccessAction = response => ({
  type: CONNECT_USER_SUCCESS,
  response
})

export const connectUserFailAction = response => ({
  type: CONNECT_USER_FAIL,
  message: response.error
})

export const disconnectUserSuccessAction = response => ({
  type: DISCONNECT_USER_SUCCESS,
  response
})
