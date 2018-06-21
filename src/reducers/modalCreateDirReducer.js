import {
  SHOW_MODAL_CREATE_DIR,
  HIDE_MODAL_CREATE_DIR
} from "../actions/modalCreateDirAction"

const initialState = { visibilityModalCreateDir: false }

// initialState is the default value of prevState
const modalCreateDirReducer = (prevState = initialState, action) => {
  if (action.type === SHOW_MODAL_CREATE_DIR) {
    return {
      visibilityModalCreateDir: true
    }
  }
  if (action.type === HIDE_MODAL_CREATE_DIR) {
    // we modify the visibility in the store
    return {
      visibilityModalCreateDir: false
    }
  }
  return prevState
}

export default modalCreateDirReducer
