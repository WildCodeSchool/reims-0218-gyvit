import {
  FETCH_FOLDERS_SUCCESS,
  CREATE_DIR_SUCCESS,
  RETRIEVE_DIR_SUCCESS,
  UPDATE_A_FOLDER_SUCCESS,
  DELETE_A_FOLDER_SUCCESS,
  SORT_DIRS_BY_NAME_SUCCESS,
  SORT_DIRS_BY_DATE_SUCCESS
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

  if (action.type === SORT_DIRS_BY_NAME_SUCCESS) {
    //copying dirs in prevState, then sort them by name
    const sortedDirsByName = [...prevState].sort((dirA, dirB) => {
      if (dirA.name.toLowerCase() < dirB.name.toLowerCase()) return -1
      if (dirA.name.toLowerCase() > dirB.name.toLowerCase()) return 1
      return 0
    })
    return sortedDirsByName
  }

  if (action.type === SORT_DIRS_BY_DATE_SUCCESS) {
    //copying dirs in prevState, then sort them by date
    const sortedDirsByName = [...prevState].sort((dirA, dirB) => {
      if (Date.parse(dirA.modified) < Date.parse(dirB.modified)) return -1
      if (Date.parse(dirA.modified) > Date.parse(dirB.modified)) return 1
      return 0
    })
    return sortedDirsByName
  }

  // if (action.type === SORT_DIRS_BY_NAME_ASC) {
  //   const sortedArray = prevState.slice().sort((a, b) => {
  //     if (a.name.toLowerCase() < b.name.toLowerCase()) return -1

  //     if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
  //   })
  //   return sortedArray
  // }

  return prevState
}

export default foldersReducer
