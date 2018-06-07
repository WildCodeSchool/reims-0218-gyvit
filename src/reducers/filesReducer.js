import { UPDATE_FILE_SUCCESS } from "../actions/updateFileAction"
import { FETCH_FILES_SUCCESS, ADD_A_FILE_ACTION } from "../actions/filesActions"

const initialState = []

export const filesReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case FETCH_FILES_SUCCESS:
    case UPDATE_FILE_SUCCESS:
      return action.response
    default:
      return prevState
  }
}

export const addAFile = (prevState = initialState, action) => {
  if (action.type === ADD_A_FILE_ACTION) {
    return [...prevState, action.response]
  }
  return prevState
}
