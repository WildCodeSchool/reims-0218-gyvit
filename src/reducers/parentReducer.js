import { RETRIEVE_DIR_SUCCESS } from "../actions/foldersActions"

const initialState = {}

const parentReducer = (prevState = initialState, action) => {
  if (action.type === RETRIEVE_DIR_SUCCESS) {
    return action.response.parent
  }
  return prevState
}

export default parentReducer
