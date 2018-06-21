import { combineReducers } from "redux"

import userReducer from "./userReducer"
import foldersReducer from "./foldersReducer"
import filesReducer from "./filesReducer"
import currentDirInfosReducer from "./currentDirReducer"

export default combineReducers({
  folders: foldersReducer,
  files: filesReducer,
  user: userReducer,
  currentDirInfo: currentDirInfosReducer
})
