//TODO: Delete file reducer in connection with action delete file

import { DELETE_A_FILE_SUCCESS } from "../actions/filesActions"

const initialState = []

const deleteFileReducer = (prevState = initialState, action) => {
  if (action.type === DELETE_A_FILE_SUCCESS) {
    return prevState.filter(file => action.fileId !== file.id)
  }
  return prevState
}

export default deleteFileReducer
