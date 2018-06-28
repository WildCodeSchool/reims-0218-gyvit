import {
  SHOW_MODAL_CREATE_FILE,
  HIDE_MODAL_CREATE_FILE
} from "../actions/modalCreateFileAction"

const initialState = {
  visibilityCreateFile: false
}

// initialState is the default value of prevState
const modalCreateFileReducer = (prevState = initialState, action) => {
  if (action.type === SHOW_MODAL_CREATE_FILE) {
    return {
      visibilityCreateFile: true
    }
  }
  if (action.type === HIDE_MODAL_CREATE_FILE) {
    // we modify the visibilityCreateFile in the store
    return {
      visibilityCreateFile: false
    }
  }
  return prevState
}

export default modalCreateFileReducer
