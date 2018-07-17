import {
  SORT_DIRS_BY_NAME_SUCCESS,
  SORT_DIRS_BY_DATE_SUCCESS
} from "../actions/foldersActions"

const initialState = ""

const orders = ["asc", "desc", ""]

const sortDirsReducer = (prevState = initialState, action) => {
  if (action.type === SORT_DIRS_BY_DATE_SUCCESS) {
    //changing value of direction
    const indiceOrder = orders.findIndex(direction => {
      console.log(direction, " === ", action.direction)
      return direction === action.direction
    })
    console.log("indiceOrder: ", indiceOrder)
  }
  if (action.type === SORT_DIRS_BY_NAME_SUCCESS) {
    //changing value of direction
    const indiceOrder = orders.findIndex(direction => {
      console.log(direction, " === ", action.direction)
      return direction === action.direction
    })
    console.log("indiceOrder: ", indiceOrder)
  }

  return prevState
}

export default sortDirsReducer
