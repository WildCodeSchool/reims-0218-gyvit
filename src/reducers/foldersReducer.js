import { FETCH_FOLDERS_SUCCESS } from "../actions/foldersActions"
import { ADD_FOLDERS_SUCCCESS } from "./action/foldersActions"

const initialState = []

export const folders = (prevState = initialState, action) => {
  if (action.type === FETCH_FOLDERS_SUCCESS) {
    return action.response
  }
  return prevState
}

export const addFolders = (prevState = initialState, action) => {
  if (action.type === ADD_FOLDERS_SUCCCESS) {
    return action.response
  }
  return prevState
}
