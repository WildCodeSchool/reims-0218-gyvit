import {
  FETCH_FOLDERS_SUCCESS,
  ADD_A_FOLDER_SUCCESS,
  UPDATE_A_FOLDER_SUCCESS
} from "../actions/foldersActions"

const initialState = []

const foldersReducer = (prevState = initialState, action) => {
  if (action.type === FETCH_FOLDERS_SUCCESS) {
    return action.response
  }
  if (action.type === ADD_A_FOLDER_SUCCESS) {
    return [...prevState, action.response]
  }
  if (action.type === UPDATE_A_FOLDER_SUCCESS) {
    return action.response
  }
  return prevState
}

export default foldersReducer
