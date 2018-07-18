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
      if (dirA.name.toLowerCase() < dirB.name.toLowerCase()) {
        if (action.direction === "asc") {
          return -1
        } else if (action.direction === "desc") {
          return 1
        }
      }
      if (dirA.name.toLowerCase() > dirB.name.toLowerCase()) {
        if (action.direction === "asc") {
          return 1
        } else if (action.direction === "desc") {
          return -1
        }
      }
      return 0 // direction==""
    })
    return sortedDirsByName
  }

  if (action.type === SORT_DIRS_BY_DATE_SUCCESS) {
    //copying dirs in prevState, then sort them by date
    const sortedDirsByDate = [...prevState].sort((dirA, dirB) => {
      if (Date.parse(dirA.modified) < Date.parse(dirB.modified)) {
        if (action.direction === "asc") {
          return -1
        } else if (action.direction === "desc") {
          return 1
        }
      }
      if (Date.parse(dirA.modified) > Date.parse(dirB.modified)) {
        if (action.direction === "asc") {
          return 1
        } else if (action.direction === "desc") {
          return -1
        }
      }
      return 0
    })
    return sortedDirsByDate
  }

  return prevState
}

export default foldersReducer
