import {
  HIDE_MODAL_UPDATE_FILE,
  SHOW_MODAL_UPDATE_FILE
} from "../actions/modalUpdateFileAction"

const initialState = {
  visibilityCreateDir: false
}

// initialState is the default value of prevState
const modalUpdateFileReducer = (prevState = initialState, action) => {
  if (action.type === SHOW_MODAL_UPDATE_FILE) {
    return {
      visibilityUpdateFile: true,
      file: action.file,
      name: action.name
    }
  }
  if (action.type === HIDE_MODAL_UPDATE_FILE) {
    // we modify the visibilityUpdateDir in the store
    return {
      visibilityUpdateFile: false
    }
  }
  return prevState
}

export default modalUpdateFileReducer
