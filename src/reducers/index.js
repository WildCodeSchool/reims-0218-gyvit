import { combineReducers } from "redux"

import userReducer from "./userReducer"
import foldersReducers from "./foldersReducer"
import filesReducers from "./filesReducer"

export default combineReducers({
  folders: foldersReducers,
  files: filesReducers,
  user: userReducer
})
