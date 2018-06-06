import { combineReducers } from "redux"

import userReducer from "./userReducer"
import foldersReducers from "./foldersReducer"
import filesReducers from "./filesReducer"
import addFilesReducers from "./addFilesReducer"

export default combineReducers({
  folders: foldersReducers,
  files: filesReducers,
  addFiles: addFilesReducers,
  user: userReducer
})
