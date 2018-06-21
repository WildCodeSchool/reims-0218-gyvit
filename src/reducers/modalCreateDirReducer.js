import {
  SHOW_MODAL_CREATE_DIR,
  HIDE_MODAL_CREATE_DIR
} from "../actions/modalCreateDirAction"

const initialState = {
  visibilityCreateDir : false
}

// initialState is the default value of prevState
const modalCreateDirReducer = (prevState = initialState, action) => {
  if (action.type === SHOW_MODAL_CREATE_DIR) {
    return {
      visibilityCreateDir : true
   }
  }
  if (action.type === HIDE_MODAL_CREATE_DIR) {
    // we modify the visibilityCreateDir in the store
    return {
      visibilityCreateDir : false
   }
  }
  return prevState
}

export default modalCreateDirReducer
