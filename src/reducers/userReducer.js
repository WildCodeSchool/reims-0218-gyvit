import {
  FETCH_USER_CONNECTION_SUCCESS,
  DISCONNECT_USER_SUCCESS
} from "../actions/userAction"

const initialState = {}

// initialState is the default value of prevState
const userReducer = (prevState = initialState, action) => {
  if (action.type === FETCH_USER_CONNECTION_SUCCESS) {
    return { ...prevState, user: action.user }
  }
  if (action.type === DISCONNECT_USER_SUCCESS) {
    prevState.user = ""
    return prevState
  }
  return prevState
}

export default userReducer
