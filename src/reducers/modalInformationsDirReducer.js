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
      _id: action.dir,
      name: action.name,
      date: action.created
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
