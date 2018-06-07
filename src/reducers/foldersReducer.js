import { FETCH_FOLDERS_SUCCESS } from "../actions/foldersActions"
import { ADD_A_FOLDER_ACTION } from "../actions/foldersActions"

<<<<<<< HEAD
const initialState = {}
=======
const initialState = []
>>>>>>> develop

export const listAllFolders = (prevState = initialState, action) => {
  if (action.type === FETCH_FOLDERS_SUCCESS) {
    return action.response
  }
  return prevState
}

export const addAFolder = (prevState = initialState, action) => {
  if (action.type === ADD_A_FOLDER_ACTION) {
    return [...prevState, action.response]
  }
  return prevState
}
