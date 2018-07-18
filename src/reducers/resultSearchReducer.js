import { LIST_ALL_DIRS, RETRIEVE_DIR_SUCCESS } from "../actions/foldersActions"

const initialState = []

const resultSearchReducer = (prevState = initialState, action) => {
  if (action.type === LIST_ALL_DIRS) {
    return action.response
  }
  if (action.type === RETRIEVE_DIR_SUCCESS) {
    return initialState
  }
  return prevState
}

export default resultSearchReducer
