import {
  SHOW_MODAL_INFORMATIONS_DIR,
  HIDE_MODAL_INFORMATIONS_DIR
} from "../actions/modalInformationsDirAction"

const initialState = {
  visibilityInformationsDir: false
}

// initialState is the default value of prevState
const modalInformationsDirReducer = (prevState = initialState, action) => {
  if (action.type === SHOW_MODAL_INFORMATIONS_DIR) {
    return {
      visibilityInformationsDir: true,
      dir: action.dir,
      name: action.name,
      response: action.response
    }
  }
  if (action.type === HIDE_MODAL_INFORMATIONS_DIR) {
    // we modify the visibilityInformationsDir in the store
    return {
      visibilityInformationsDir: false
    }
  }
  return prevState
}

export default modalInformationsDirReducer
