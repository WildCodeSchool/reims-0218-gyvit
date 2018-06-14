import {
  UPDATE_A_FILE_SUCCESS,
  FETCH_FILES_SUCCESS,
  ADD_A_FILE_SUCCESS,
  DELETE_A_FILE_SUCCESS,
  RETRIEVE_DIR_SUCCESS,
  FILTER_ALL_DIRS
} from "../actions/filesActions"

const initialState = []

const filesReducer = (prevState = initialState, action) => {
  if (action.type === FETCH_FILES_SUCCESS) {
    return prevState
  }
  if (action.type === UPDATE_A_FILE_SUCCESS) {
    return action.response
  }
  if (action.type === ADD_A_FILE_SUCCESS) {
    return [...prevState, action.response]
  }
  if (action.type === DELETE_A_FILE_SUCCESS) {
    return prevState.filter(file => action.fileId !== file._id)
  }
  if (action.type === RETRIEVE_DIR_SUCCESS) {
    return action.response.files
  }
  return prevState
}

export default filesReducer
