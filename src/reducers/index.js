import { combineReducers } from "redux"

import foldersReducers from "./foldersReducer"
import filesReducers from "./filesReducer"

export default combineReducers({
  folders: foldersReducers,
  files: filesReducers
})
