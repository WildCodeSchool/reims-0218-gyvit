import { FETCH_FOLDERS_SUCCESS } from "../actions/foldersActions"
import { ADD_A_FOLDER_ACTION } from "../actions/foldersActions"
import { DELETE_FOLDER_ACTION } from "../actions/foldersActions"

const initialState = []

const foldersReducers = (prevState = initialState, action) => {
  if (action.type === FETCH_FOLDERS_SUCCESS) {
    return action.response
  }
  if (action.type === ADD_A_FOLDER_ACTION) {
    return [...prevState, action.response]
  }
  
  if (action.type === DELETE_FOLDER_ACTION) {
    return prevState.filter(folder => action.folderId !== folder.id)
  }
  return prevState
}

export default foldersReducers
