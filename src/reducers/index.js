//TODO: Create link on redux and all reducers

import { combineReducers } from "redux"

import userReducer from "./userReducer"
import foldersReducer from "./foldersReducer"
import filesReducer from "./filesReducer"

export default combineReducers({
  folders: foldersReducer,
  files: filesReducer,
  user: userReducer
})
