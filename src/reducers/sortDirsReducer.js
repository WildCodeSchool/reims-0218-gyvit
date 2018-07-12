import  {SORT_DIRS_BY_NAME_ASC,
  SORT_DIRS_BY_NAME_DESC,
  SORT_DIRS_BY_DATE_ASC,
  SORT_DIRS_BY_DATE_DESC} from "../actions/sortDirsActions"


const initialState = []

const compareDirs = (a, b,direction) => {
// we don't change the order
if (((direction==="asc") && (a < b)) || ((direction==="desc") && (a > b)))
return -1;
// we change the order
if (((direction==="asc") && (a > b)) || ((direction==="desc") && (a < b)))
return 1;
// a doit être égal à b
return 0;
}


const sortDirsReducer = (prevState = initialState, action)=> {
if (action.type===SORT_DIRS_BY_NAME_ASC || action.type===SORT_DIRS_BY_NAME_DESC)

return prevState.sort((action.name,) => compareDirs(a,b, action.action))
}

export default sortDirsReducer
