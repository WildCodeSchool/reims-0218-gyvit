import { RETRIEVE_DIR_SUCCESS } from "../actions/foldersActions"

const initialState = {}

const foldersReducer = (prevState = initialState, action) => {
  if (action.type === RETRIEVE_DIR_SUCCESS) {
    console.log("parent=" + action.response.parent)
    return action.response
  }
  return prevState
}

export default foldersReducer
