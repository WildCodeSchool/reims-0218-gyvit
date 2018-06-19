import {
  CONNECT_USER_SUCCESS,
  DISCONNECT_USER_SUCCESS,
  CONNECT_USER_FAIL
} from "../actions/userAction"

const initialState = {}

// initialState is the default value of prevState
const userReducer = (prevState = initialState, action) => {
  if (action.type === CONNECT_USER_SUCCESS) {
    return action.response
  }
  if (
    action.type === DISCONNECT_USER_SUCCESS ||
    action.type === CONNECT_USER_FAIL
  ) {
    // if disconnect or failConnect, response has a response.message
    return { success: false, message: action.message }
  }
  return prevState
}

export default userReducer
