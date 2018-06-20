import { combineReducers } from "redux"

import userReducer from "./userReducer"
import foldersReducer from "./foldersReducer"
import filesReducer from "./filesReducer"
import parentReducer from "./parentReducer"
import errorsReducer from "./errorsReducer"

export default combineReducers({
  error: errorsReducer,
  folders: foldersReducer,
  files: filesReducer,
  user: userReducer,
  parent: parentReducer
})
