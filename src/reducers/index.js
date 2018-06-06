import { combineReducers } from "redux"

import foldersReducers from "./foldersReducer"
import filesReducers from "./filesReducer"
import deleteFileReducers from "./deleteFileReducers"

export default combineReducers({
  folders: foldersReducers,
  files: filesReducers,
  deleteFile: deleteFileReducers
})
