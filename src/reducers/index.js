import { combineReducers } from "redux"

import foldersReducers from "./foldersReducer"
import userReducer from "./userReducer"

export default combineReducers({
  folders: foldersReducers,
  user: userReducer
})
