import { SHOW_MODAL_ERROR, HIDE_MODAL_ERROR } from "../actions/errorsActions"

const initialState = {}

// initialState is the default value of prevState
const errorsReducer = (prevState = initialState, action) => {
  if (action.type === SHOW_MODAL_ERROR) {
    return { ...prevState, visibilityError: action.visibilityError }
  }
  if (action.type === HIDE_MODAL_ERROR) {
    // we modify the visibility in the store
    return { ...prevState, visibilityError: action.visibilityError }
  }
  return prevState
}

export default errorsReducer
