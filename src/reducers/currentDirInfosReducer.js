import { RETRIEVE_DIR_SUCCESS } from "../actions/foldersActions"

const initialState = {}

const currentDirInfosReducer = (prevState = initialState, action) => {
  if (action.type === RETRIEVE_DIR_SUCCESS) {
    return action.response
  }

  return prevState
}

export default currentDirInfosReducer
