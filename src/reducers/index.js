import { combineReducers } from "redux"

import userReducer from "./userReducer"
import foldersReducer from "./foldersReducer"
import filesReducer from "./filesReducer"
import parentReducer from "./parentReducer"
import errorsReducer from "./errorsReducer"
import modalCreateDirReducer from "./modalCreateDirReducer"

export default combineReducers({
  error: errorsReducer,
  dirs: foldersReducer,
  files: filesReducer,
  user: userReducer,
  parent: parentReducer,
  modalCreateDir: modalCreateDirReducer
})
