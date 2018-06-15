import { SHOW_MODAL_ERROR, HIDE_MODAL_ERROR } from "../actions/errorAction"

const initialState = {}

// initialState is the default value of prevState
const errorsReducer = (prevState = initialState, action) => {
  if (action.type === SHOW_MODAL_ERROR) {
    return { ...prevState, visibility: action.visibility }
  }
  if (action.type === HIDE_MODAL_ERROR) {
    // we modify the visibility in the store
    return { ...prevState, visibility: action.visibility }
  }
  return prevState
}

export default errorsReducer
