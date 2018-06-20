import { RETRIEVE_DIR_SUCCESS } from "../actions/foldersActions"

const initialState = {}

const parentReducer = (prevState = initialState, action) => {
  if (action.type === RETRIEVE_DIR_SUCCESS) {
    console.log("parent=" + action.response._id)
    return action.response
  }
  return prevState
}

export default parentReducer
