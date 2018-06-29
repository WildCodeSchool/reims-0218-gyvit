import {
  SHOW_MODAL_UPDATE_DIR,
  HIDE_MODAL_UPDATE_DIR
} from "../actions/modalUpdateDirAction"

const initialState = {
  visibilityCreateDir: false
}

// initialState is the default value of prevState
const modalUpdateDirReducer = (prevState = initialState, action) => {
  if (action.type === SHOW_MODAL_UPDATE_DIR) {
    return {
      visibilityUpdateDir: true
    }
  }
  if (action.type === HIDE_MODAL_UPDATE_DIR) {
    // we modify the visibilityUpdateDir in the store
    return {
      visibilityUpdateDir: false
    }
  }
  return prevState
}

export default modalUpdateDirReducer
