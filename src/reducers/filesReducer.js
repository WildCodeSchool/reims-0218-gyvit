import {
  UPDATE_FILE_SUCCESS,
  FETCH_FILES_SUCCESS,
  ADD_A_FILE_ACTION
} from "../actions/filesActions"

const initialState = []

const filesReducer = (prevState = initialState, action) => {
  if (action.type === FETCH_FILES_SUCCESS) {
    return action.response
  }
  if (action.type === UPDATE_FILE_SUCCESS) {
    return action.response
  }
  if (action.type === ADD_A_FILE_ACTION) {
    return [...prevState, action.response]
  }
  return prevState
}

export default filesReducer
