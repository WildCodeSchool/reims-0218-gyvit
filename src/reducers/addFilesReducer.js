import { ADD_FILE_ACTION } from "../actions/filesActions"

const initialState = []

const addFiles = (prevState = initialState, action) => {
  if (action.type === ADD_FILE_ACTION) {
    return [...prevState, action.response]
  }
  return prevState
}

export default addFiles
