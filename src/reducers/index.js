import { combineReducers } from "redux"

import userReducer from "./userReducer"
import foldersReducers from "./foldersReducer"
import filesReducers from "./filesReducer"
import deleteFileReducer from "./deleteFileReducer"

export default combineReducers({
  folders: foldersReducers,
  files: filesReducers,
  deleteFile: deleteFileReducer,
  user: userReducer
})
