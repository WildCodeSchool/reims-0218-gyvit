import { RETRIEVE_DIR_SUCCESS } from "../actions/foldersActions"

const initialState = {}

const parentReducer = (prevState = initialState, action) => {
  if (action.type === RETRIEVE_DIR_SUCCESS) {
    // if object is root, no parent
    if (action.response.parent) {
      return action.response.parent
    }
  }
  return prevState
}

export default parentReducer
