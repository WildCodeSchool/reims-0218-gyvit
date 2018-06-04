import { IS_USER } from "../actions/connectionAction"

// initialState is the default value of prevState
const userReducer = (prevState, action) => {
  if (action.type === IS_USER) {
    return prevState.filter(user => user.user !== user.id)
  }
  return prevState
}

export default userReducer
