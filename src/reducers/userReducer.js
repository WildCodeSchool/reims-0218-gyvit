import { FETCH_USER_SUCCESS } from "../actions/connectionAction"

// initialState is the default value of prevState
const userReducer = (prevState, action) => {
  if (action.type === FETCH_USER_SUCCESS) {
    return [...prevState, { user: action.user, token: action.token }]
  }
  return prevState
}

export default userReducer
