export const SORT_DIRS_BY_NAME_ASC = "SORT_DIRS_BY_NAME_ASC"
export const SORT_DIRS_BY_NAME_DESC = "SORT_DIRS_BY_NAME_DESC "
export const SORT_DIRS_BY_DATE_ASC = "SORT_DIRS_BY_DATE_ASC"
export const SORT_DIRS_BY_DATE_DESC = "SORT_DIRS_BY_DATE_DESC"


export const makeSortDirsByNameAsc = () =>({
  type: SORT_DIRS_BY_NAME_ASC, 
  
})

export const makeSortDirsByNameDesc = () => ({
  type: SORT_DIRS_BY_NAME_DESC,

})

export const makeSortDirsByDateAsc = () => ({
  type: SORT_DIRS_BY_DATE_ASC,

})

export const makeSortDirsByDateDesc = () => ({
  type: SORT_DIRS_BY_DATE_DESC,

})
