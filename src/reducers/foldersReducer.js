import {
  FETCH_FOLDERS_SUCCESS,
  ADD_A_FOLDER_SUCCESS,
  RETRIEVE_DIR_SUCCESS,
  UPDATE_A_FOLDER_SUCCESS,
  DELETE_A_FOLDER_SUCCESS,
  FILTER_ALL_DIRS
} from "../actions/foldersActions"

const initialState = []

const foldersReducer = (prevState = initialState, action) => {
  if (action.type === FETCH_FOLDERS_SUCCESS) {
    return prevState
  }
  if (action.type === ADD_A_FOLDER_SUCCESS) {
    return [...prevState, action.response]
  }
  if (action.type === RETRIEVE_DIR_SUCCESS) {
    return action.response.dirs
  }
  if (action.type === UPDATE_A_FOLDER_SUCCESS) {
    return action.response
  }
  if (action.type === DELETE_A_FOLDER_SUCCESS) {
    return prevState.filter(folder => action.folderId !== folder._id)
  }
  if (action.type === FILTER_ALL_DIRS) {
    return action.filter
  }
  return prevState
}

export default foldersReducer
