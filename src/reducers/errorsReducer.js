import { SHOW_MODAL_ERROR, HIDE_MODAL_ERROR } from "../actions/errorsActions"

const initialState = { visibilityError: false, message: "" }

// initialState is the default value of prevState
// if error was foreseen: message else error
const errorsReducer = (prevState = initialState, action) => {
  if (action.type === SHOW_MODAL_ERROR) {
    return {
      visibilityError: true,
      message: action.message,
      error: action.error
    }
  }
  if (action.type === HIDE_MODAL_ERROR) {
    // we modify the visibility in the store
    return {
      visibilityError: false,
      message: "",
      error: ""
    }
  }
  return prevState
}

export default errorsReducer
