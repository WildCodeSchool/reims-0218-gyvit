import {
  FETCH_FOLDERS_SUCCESS,
  ADD_A_FOLDER_ACTION
} from "../actions/foldersActions"

const initialState = []

const foldersReducer = (prevState = initialState, action) => {
  if (action.type === FETCH_FOLDERS_SUCCESS) {
    return action.response
  }
  if (action.type === ADD_A_FOLDER_ACTION) {
    return [...prevState, action.response]
  }
  return prevState
}

export default foldersReducer
