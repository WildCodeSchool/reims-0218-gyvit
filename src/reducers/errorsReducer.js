import { SHOW_MODAL_ERROR, HIDE_MODAL_ERROR } from "../actions/errorsActions"

const initialState = { visibilityError: false, message: "" }

// initialState is the default value of prevState
const errorsReducer = (prevState = initialState, action) => {
  if (action.type === SHOW_MODAL_ERROR) {
    const brancheError = {
      visibilityError: true,
      message: action.message
    }
    return brancheError
  }
  if (action.type === HIDE_MODAL_ERROR) {
    // we modify the visibility in the store
    return {
      visibilityError: false,
      message: ""
    }
  }
  return prevState
}

export default errorsReducer
