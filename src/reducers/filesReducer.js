import { FETCH_FILES_SUCCESS, ADD_FILE_ACTION } from "../actions/filesActions"

const initialState = []

export const files = (prevState = initialState, action) => {
  if (action.type === FETCH_FILES_SUCCESS) {
    return action.response
  }
  return prevState
}

export const addFiles = (prevState = initialState, action) => {
  if (action.type === ADD_FILE_ACTION) {
    return [...prevState, action.response]
  }
  return prevState
}
