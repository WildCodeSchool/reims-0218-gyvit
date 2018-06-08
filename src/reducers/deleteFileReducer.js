import { DELETE_FILE_ACTION } from "../actions/filesActions"

const initialState = []

const deleteFileReducer = (prevState = initialState, action) => {
  if (action.type === DELETE_FILE_ACTION) {
    return prevState.filter(file => action.fileId !== file.id)
  }
  return prevState
}

export default deleteFileReducer
