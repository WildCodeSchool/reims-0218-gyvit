import { combineReducers } from "redux"

import userReducer from "./userReducer"
import foldersReducer from "./foldersReducer"
import filesReducer from "./filesReducer"
import parentReducer from "./parentReducer"

export default combineReducers({
  folders: foldersReducer,
  files: filesReducer,
  user: userReducer,
  parent: parentReducer
})
