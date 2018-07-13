import { RETRIEVE_DIR_SUCCESS } from "../actions/foldersActions"
import { SORT_DIRS_BY_NAME_ASC } from "../actions/sortDirsActions"

const initialState = []

const sortDirsReducer = (prevState = initialState, action) => {
  if (action.type === RETRIEVE_DIR_SUCCESS) {
    const array = action.response.dirs
    const sortedArray = array.slice().sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1

      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
    })
    return sortedArray
  }
  return prevState
}
export default sortDirsReducer
