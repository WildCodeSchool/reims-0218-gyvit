import  {SORT_DIRS_BY_NAME_ASC,
  SORT_DIRS_BY_NAME_DESC,
  SORT_DIRS_BY_DATE_ASC,
  SORT_DIRS_BY_DATE_DESC} from "../actions/sortDirsActions"


const initialState = []

const compareDirs = (prevState = initialState, action) => {
  if (action.type === SORT_DIRS_BY_NAME_ASC){
    return prevState.slice().sort(function(a, b) {
      var nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase()
      if (nameA < nameB)
        return -1
      if (nameA > nameB)
        return 1
      return 0
    }
  if (action.type ===SORT_DIRS_BY_NAME_DESC){
    return ;
  }
  if (action.type === SORT_DIRS_BY_DATE_ASC){
    return ;
  }
  if (action.type === SORT_DIRS_BY_DATE_DESC){
    return ;
  }
  }




// const compareDirs = (a, b,direction) => {
// // we don't change the order
// if (((direction==="asc") && (a < b)) || ((direction==="desc") && (a > b)))
// return -1;
// // we change the order
// if (((direction==="asc") && (a > b)) || ((direction==="desc") && (a < b)))
// return 1;
// // a doit être égal à b
// return 0;
// }


// const sortDirsReducer = (prevState = initialState, action)=> {
// if (action.type===SORT_DIRS_BY_NAME_ASC || action.type===SORT_DIRS_BY_NAME_DESC)

// return prevState.sort(action.name) => compareDirs(a,b, action.action)
// }

export default compareDirs
