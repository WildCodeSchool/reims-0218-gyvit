import { RETRIEVE_DIR_SUCCESS } from "../actions/foldersActions"

const initialState = []

const sortDirsReducer = (prevState = initialState, action) => {
  if (action.type === RETRIEVE_DIR_SUCCESS) {
    const array = action.response.dirs
    const sortedArray = array.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1

      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
    })
    return sortedArray
  }
  return prevState
}
export default sortDirsReducer
