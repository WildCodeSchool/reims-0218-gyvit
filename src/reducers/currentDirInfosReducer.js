import { FETCH_FOLDERS_SUCCESS } from "../actions/foldersActions"

const initialState = {}

const currentDirInfosReducer = (prevState = initialState, action) => {
  if (action.type === FETCH_FOLDERS_SUCCESS) {
    return action.response
  }

  return prevState
}

export default currentDirInfosReducer
