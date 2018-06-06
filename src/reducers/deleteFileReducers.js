import { DELETE_FILE_ACTION } from "../actions/actions"

const initialState = []

const deleteFileReducers = (prevState = initialState, action) => {
  if (action.type === DELETE_FILE_ACTION) {
    return prevState.filter(file => action.fileId !== file.id)
  }
  return prevState
}

export default deleteFileReducers
