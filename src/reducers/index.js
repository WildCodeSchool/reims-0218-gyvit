import { combineReducers } from "redux"

import foldersReducers from "./foldersReducer"
import filesReducers from "./filesReducer"
import addFilesReducers from "./addFilesReducer"

export default combineReducers({
  folders: foldersReducers,
  files: filesReducers,
  addFiles: addFilesReducers
})
