import {
  FETCH_FOLDERS_SUCCESS,
  CREATE_DIR_SUCCESS,
  RETRIEVE_DIR_SUCCESS,
  UPDATE_A_FOLDER_SUCCESS,
  DELETE_A_FOLDER_SUCCESS,
  SORT_DIRS_BY_NAME_ASC,
  SORT_DIRS_BY_NAME_DESC,
  SORT_DIRS_BY_DATE_ASC,
  SORT_DIRS_BY_DATE_DESC
} from "../actions/foldersActions"

const initialState = []

const foldersReducer = (prevState = initialState, action) => {
  if (action.type === FETCH_FOLDERS_SUCCESS) {
    return prevState
  }
  if (action.type === CREATE_DIR_SUCCESS) {
    return [...prevState, action.response]
  }
  if (action.type === RETRIEVE_DIR_SUCCESS) {
    return action.response.dirs
  }

  if (action.type === UPDATE_A_FOLDER_SUCCESS) {
    return prevState.map(dir => {
      if (dir._id === action.response._id) {
        return {
          ...dir,
          name: action.response.name
        }
      }
      return dir
    })
  }
  if (action.type === DELETE_A_FOLDER_SUCCESS) {
    return prevState.filter(dir => action.dirId !== dir._id)
  }

  if (action.type === SORT_DIRS_BY_NAME_ASC) {
    const sortedArray = prevState.slice().sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1

      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
    })
    return sortedArray
  }

  if (action.type === SORT_DIRS_BY_NAME_DESC) {
    const sortedArray = prevState.slice().sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1

      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
    })
    return sortedArray.reverse()
  }
  if (action.type === SORT_DIRS_BY_DATE_ASC) {
    const sortedArrayByDate = prevState.slice().sort((a, b) => {
      if (a.modified.toLowerCase() < b.modified.toLowerCase()) return -1

      if (a.modified.toLowerCase() > b.modified.toLowerCase()) return 1
    })
    return sortedArrayByDate
  }
  if (action.type === SORT_DIRS_BY_DATE_DESC) {
    const sortedArrayByDate = prevState.slice().sort((a, b) => {
      if (a.modified.toLowerCase() < b.modified.toLowerCase()) return -1

      if (a.modified.toLowerCase() > b.modified.toLowerCase()) return 1
    })
    return sortedArrayByDate.reverse()
  }

  return prevState
}

export default foldersReducer
