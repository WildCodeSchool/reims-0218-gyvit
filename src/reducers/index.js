import { combineReducers } from "redux"

import userReducer from "./userReducer"
import foldersReducer from "./foldersReducer"
import filesReducer from "./filesReducer"
import errorsReducer from "./errorsReducer"

export default combineReducers({
  folders: foldersReducer,
  files: filesReducer,
  user: userReducer,
  error: errorsReducer
})
