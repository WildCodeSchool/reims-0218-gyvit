import { FETCH_FILES_SUCCESS } from "../actions/actions"

const initialState = {}

const files = (prevState = initialState, action) => {
  if (action.type === FETCH_FILES_SUCCESS) {
    return action.response
  }
  return prevState
}

export default files
