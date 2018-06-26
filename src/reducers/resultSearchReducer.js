import { LIST_ALL_DIRS } from "../actions/foldersActions"

const initialState = []

const resultSearchReducer = (prevState = initialState, action) => {
  if (action.type === LIST_ALL_DIRS) {
    return action.response
  }
  return prevState
}

export default resultSearchReducer
