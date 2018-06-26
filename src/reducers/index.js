import { combineReducers } from "redux"

import userReducer from "./userReducer"
import foldersReducer from "./foldersReducer"
import filesReducer from "./filesReducer"
import parentReducer from "./parentReducer"
import errorsReducer from "./errorsReducer"
import currentDirReducer from "./currentDirReducer"
import modalCreateDirReducer from "./modalCreateDirReducer"
<<<<<<< HEAD
import resultSearchReducer from "./resultSearchReducer"
=======
import NotifReducer from "./NotifReducer"
>>>>>>> develop

export default combineReducers({
  error: errorsReducer,
  dirs: foldersReducer,
  files: filesReducer,
  user: userReducer,
  parent: parentReducer,
  currentDir: currentDirReducer,
  modalCreateDir: modalCreateDirReducer,
<<<<<<< HEAD
  resultSearch: resultSearchReducer
=======
  notif: NotifReducer
>>>>>>> develop
})
