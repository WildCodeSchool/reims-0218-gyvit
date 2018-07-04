import { LIST_INFORMATIONS_DIR_SUCCESS } from "../actions/foldersActions"

const initialState = {}

const selectedDirReducer = (prevState = initialState, action) => {
  if (action.type === LIST_INFORMATIONS_DIR_SUCCESS) {
    return action.response
  }
  return prevState
}
export default selectedDirReducer
