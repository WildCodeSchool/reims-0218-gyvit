import {
  UPDATE_A_FILE_SUCCESS,
  FETCH_FILES_SUCCESS,
  ADD_A_FILE_SUCCESS,
  DELETE_A_FILE_SUCCESS,
  RETRIEVE_FILE_SUCCESS
} from "../actions/filesActions"

const initialState = []

const filesReducer = (prevState = initialState, action) => {
  if (action.type === FETCH_FILES_SUCCESS) {
    return action.response
  }
  if (action.type === UPDATE_A_FILE_SUCCESS) {
    return action.response
  }
  if (action.type === ADD_A_FILE_SUCCESS) {
    return [...prevState, action.response]
  }
  if (action.type === DELETE_A_FILE_SUCCESS) {
    return prevState.filter(file => action.fileId !== file.id)
  }
  if (action.type === RETRIEVE_FILE_SUCCESS) {
    return action.response.file
  }
  return prevState
}

export default filesReducer
