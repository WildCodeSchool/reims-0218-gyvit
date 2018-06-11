//TODO: Create reducers user on connection with userAction

import {
  CONNECT_USER_SUCCESS,
  DISCONNECT_USER_SUCCESS
} from "../actions/userAction"

const initialState = {}

// initialState is the default value of prevState
const userReducer = (prevState = initialState, action) => {
  if (action.type === CONNECT_USER_SUCCESS) prevState.user = action.user
  if (action.type === DISCONNECT_USER_SUCCESS) prevState.user = ""
  return prevState
}

export default userReducer
