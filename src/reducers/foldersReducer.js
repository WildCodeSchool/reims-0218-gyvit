import { FETCH_FOLDERS_SUCCESS } from "../actions/actions"

const initialState = {}

const folders = (prevState = initialState, action) => {
  if (action.type === FETCH_FOLDERS_SUCCESS) {
    return action.response
  }
  return prevState
}

export default folders
