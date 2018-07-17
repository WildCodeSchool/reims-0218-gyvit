import {
  SORT_DIRS_BY_NAME_SUCCESS,
  SORT_DIRS_BY_DATE_SUCCESS
} from "../actions/foldersActions"

const initialState = { directionDate: "", directionName: "" }

const swapOrder = order => {
  switch (order) {
    case "asc":
      return "desc"
    case "desc":
      return "asc"
    case "":
      return "asc"
    default:
      return ""
  }
}

const sortDirsReducer = (prevState = initialState, action) => {
  if (action.type === SORT_DIRS_BY_DATE_SUCCESS) {
    //changing value of direction
    return {
      ...prevState,
      directionDate: swapOrder(action.direction),
      directionName: ""
    }
  }
  if (action.type === SORT_DIRS_BY_NAME_SUCCESS) {
    //changing value of direction
    return {
      ...prevState,
      directionName: swapOrder(action.direction),
      directionDate: ""
    }
  }

  return prevState
}

export default sortDirsReducer
