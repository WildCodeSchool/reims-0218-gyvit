import { RETRIEVE_DIR_SUCCESS } from "../actions/filesActions"

const initialState = []

const filesReducer = (prevState = initialState, action) => {
  if (action.type === RETRIEVE_DIR_SUCCESS) {
    return action.response.files
  }

  return prevState
}

export default filesReducer
