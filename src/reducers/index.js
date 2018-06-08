import { combineReducers } from "redux"

import userReducer from "./userReducer"
import { listAllFolders } from "./foldersReducer"
import { filesReducer } from "./filesReducer"

export default combineReducers({
  folders: listAllFolders,
  files: filesReducer,
  user: userReducer
})
