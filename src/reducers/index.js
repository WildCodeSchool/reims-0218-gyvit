import { combineReducers } from "redux"

import userReducer from "./userReducer"
import foldersReducer from "./foldersReducer"
import sortDirsReducer from "./sortDirsReducer"
import selectedDirReducer from "./selectedDirReducer"
import filesReducer from "./filesReducer"
import parentReducer from "./parentReducer"
import errorsReducer from "./errorsReducer"
import currentDirReducer from "./currentDirReducer"
import modalCreateDirReducer from "./modalCreateDirReducer"
import resultSearchReducer from "./resultSearchReducer"
import NotifReducer from "./NotifReducer"
import modalCreateFileReducer from "./modalCreateFileReducer"
import modalUpdateDirReducer from "./modalUpdateDirReducer"
import selectedFileReducer from "./selectedFileReducer"
import modalUpdateFileReducer from "./modalUpdateFileReducer"
import currentFileReducer from "./currentFileReducer"

export default combineReducers({
  error: errorsReducer,
  dirs: foldersReducer,
  sortDirections: sortDirsReducer,
  files: filesReducer,
  user: userReducer,
  parent: parentReducer,
  currentDir: currentDirReducer,
  selectedDir: selectedDirReducer,
  modalCreateDir: modalCreateDirReducer,
  modalCreateFile: modalCreateFileReducer,
  modalUpdateDir: modalUpdateDirReducer,
  resultSearch: resultSearchReducer,
  notif: NotifReducer,
  selectedFile: selectedFileReducer,
  modalUpdateFile: modalUpdateFileReducer,
  currentFile: currentFileReducer
})
