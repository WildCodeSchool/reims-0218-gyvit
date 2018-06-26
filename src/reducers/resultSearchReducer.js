import { RETRIEVE_DIR_SUCCESS } from "../actions/filesActions"

const initialState = []

const resultSearchReducer = (prevState = initialState, action) => {
  if (action.type === RETRIEVE_DIR_SUCCESS) {
    return action.response
  }
  return prevState
}

export default resultSearchReducer
