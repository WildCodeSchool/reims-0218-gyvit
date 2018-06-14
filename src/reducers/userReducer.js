import {
  CONNECT_USER_SUCCESS,
  DISCONNECT_USER_SUCCESS
} from "../actions/userAction"

const initialState = {}

// initialState is the default value of prevState
const userReducer = (prevState = initialState, action) => {
  if (action.type === CONNECT_USER_SUCCESS) prevState = action
  if (action.type === DISCONNECT_USER_SUCCESS) prevState = ""
  return prevState
}

export default userReducer
