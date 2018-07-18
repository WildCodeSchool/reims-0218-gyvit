import {
  UPDATE_A_FILE_SUCCESS,
  FETCH_FILES_SUCCESS,
  ADD_A_FILE_SUCCESS,
  DELETE_A_FILE_SUCCESS,
  RETRIEVE_DIR_SUCCESS
} from "../actions/filesActions"
import {
  SORT_DIRS_BY_NAME_SUCCESS,
  SORT_DIRS_BY_DATE_SUCCESS
} from "../actions/foldersActions"

const initialState = []

const filesReducer = (prevState = initialState, action) => {
  if (action.type === FETCH_FILES_SUCCESS) {
    return { type: action.type, response: action.response }
  }
  if (action.type === UPDATE_A_FILE_SUCCESS) {
    return prevState.map(file => {
      if (file._id === action.response._id) {
        return {
          ...file,
          name: action.response.name
        }
      }
      return file
    })
  }

  if (action.type === ADD_A_FILE_SUCCESS) {
    // response is a file
    if (action.response.object) {
      return [...prevState, action.response]
    }
    // response is a temporary file (uploaded)
    if (action.response.file) {
      const dateMaintenant = Date.now()
      return [
        ...prevState,
        {
          name: action.response.name,
          object: "file",
          _id: "file_idAuHasard",
          size: "1000",
          ext: "ext",
          created: dateMaintenant,
          modified: dateMaintenant,
          remove: 0,
          removed: null
        }
      ]
    }
  }
  if (action.type === DELETE_A_FILE_SUCCESS) {
    return prevState.filter(file => action.fileId !== file._id)
  }
  if (action.type === RETRIEVE_DIR_SUCCESS) {
    return action.response.files
  }

  // i must use the same action as SORT_DIR because is bind on button
  if (action.type === SORT_DIRS_BY_NAME_SUCCESS) {
    //copying dirs in prevState, then sort them by name
    const sortedFilesByName = [...prevState].sort((fileA, fileB) => {
      if (fileA.name.toLowerCase() < fileB.name.toLowerCase()) {
        if (action.direction === "asc") {
          return -1
        } else if (action.direction === "desc") {
          return 1
        }
      }
      if (fileA.name.toLowerCase() > fileB.name.toLowerCase()) {
        if (action.direction === "asc") {
          return 1
        } else if (action.direction === "desc") {
          return -1
        }
      }
      return 0 // direction==""
    })
    return sortedFilesByName
  }
  // i must use the same action as SORT_DIR because is bind on button
  if (action.type === SORT_DIRS_BY_DATE_SUCCESS) {
    //copying dirs in prevState, then sort them by date
    const sortedFilesByDate = [...prevState].sort((filesA, filesB) => {
      if (Date.parse(filesA.modified) < Date.parse(filesB.modified)) {
        if (action.direction === "asc") {
          return -1
        } else if (action.direction === "desc") {
          return 1
        }
      }
      if (Date.parse(filesA.modified) > Date.parse(filesB.modified)) {
        if (action.direction === "asc") {
          return 1
        } else if (action.direction === "desc") {
          return -1
        }
      }
      return 0
    })
    return sortedFilesByDate
  }

  return prevState
}

export default filesReducer
