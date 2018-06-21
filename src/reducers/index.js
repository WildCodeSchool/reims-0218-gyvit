import { combineReducers } from "redux"

import userReducer from "./userReducer"
import foldersReducer from "./foldersReducer"
import filesReducer from "./filesReducer"
import currentDirInfosReducer from "./currentDirInfoReducer"
import parentReducer from "./parentReducer"
import errorsReducer from "./errorsReducer"
import modalCreateDirReducer from "./modalCreateDirReducer"

export default combineReducers({
  error: errorsReducer,
  dirs: foldersReducer,
  files: filesReducer,
  user: userReducer,
  currentDirInfo: currentDirInfosReducer,
  parent: parentReducer,
  modalCreateDir: modalCreateDirReducer
})
