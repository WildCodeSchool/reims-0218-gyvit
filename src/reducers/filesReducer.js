import { FETCH_FILES_SUCCESS } from "../actions/actions"
import { UPDATE_FILE_SUCCESS } from "../actions/updateFileAction"

const initialState = []

export const filesReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case FETCH_FILES_SUCCESS:
    case UPDATE_FILE_SUCCESS:
      return action.response
    default:
      return prevState
  }
}
