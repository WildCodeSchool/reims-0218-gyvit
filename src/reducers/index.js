import {combineReducers} from "redux"

import foldersReducers from "./foldersReducer"


export default combineReducers ({
  folders : foldersReducers
})