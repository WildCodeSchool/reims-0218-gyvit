import { combineReducers } from "redux"

import userReducer from "./userReducer"
import foldersReducer from "./foldersReducer"
import selectedDirReducer from "./selectedDirReducer"
import filesReducer from "./filesReducer"
import parentReducer from "./parentReducer"
import errorsReducer from "./errorsReducer"
import currentDirReducer from "./currentDirReducer"
import modalCreateDirReducer from "./modalCreateDirReducer"
import resultSearchReducer from "./resultSearchReducer"
import NotifReducer from "./NotifReducer"
import modalInformationsDirReducer from "./modalInformationsDirReducer"
import modalCreateFileReducer from "./modalCreateFileReducer"
import modalUpdateDirReducer from "./modalUpdateDirReducer"

export default combineReducers({
  error: errorsReducer,
  dirs: foldersReducer,
  files: filesReducer,
  user: userReducer,
  parent: parentReducer,
  currentDir: currentDirReducer,
  selectedDir: selectedDirReducer,
  modalInformationsDir: modalInformationsDirReducer,
  modalCreateDir: modalCreateDirReducer,
  modalCreateFile: modalCreateFileReducer,
  modalUpdateDir: modalUpdateDirReducer,
  resultSearch: resultSearchReducer,
  notif: NotifReducer
})
