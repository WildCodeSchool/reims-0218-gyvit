import { LIST_INFORMATIONS_DIR_SUCCESS } from "../actions/foldersActions"

const initialState = {}

const selectedDirReducer = (prevState = initialState, action) => {
  if (action.type === LIST_INFORMATIONS_DIR_SUCCESS) {
    return prevState.filter(dir => action.response._id === dir._id)
  }
  return prevState
}
export default selectedDirReducer
