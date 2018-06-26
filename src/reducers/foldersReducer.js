import {
  FETCH_FOLDERS_SUCCESS,
  CREATE_DIR_SUCCESS,
  RETRIEVE_DIR_SUCCESS,
  UPDATE_A_FOLDER_SUCCESS,
  DELETE_A_FOLDER_SUCCESS,
  LIST_ALL_DIRS
} from "../actions/foldersActions"

const initialState = []

const foldersReducer = (prevState = initialState, action) => {
  if (action.type === FETCH_FOLDERS_SUCCESS) {
    return prevState
  }
  if (action.type === CREATE_DIR_SUCCESS) {
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
  if (action.type === LIST_ALL_DIRS) {
    return action.response
  }

  return prevState
}

export default foldersReducer
