import { LIST_INFORMATIONS_FILE_SUCCESS } from "../actions/filesActions"

const initialState = {}

const selectedFileReducer = (prevState = initialState, action) => {
  if (action.type === LIST_INFORMATIONS_FILE_SUCCESS) {
    return action.response
  }
  return prevState
}
export default selectedFileReducer
