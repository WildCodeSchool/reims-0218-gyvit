export const SORT_DIRS_BY_NAME_ASC = "SORT_DIRS_BY_NAME_ASC"
export const SORT_DIRS_BY_NAME_DESC = "SORT_DIRS_BY_NAME_DESC "
export const SORT_DIRS_BY_DATE_ASC = "SORT_DIRS_BY_DATE_ASC"
export const SORT_DIRS_BY_DATE_DESC = "SORT_DIRS_BY_DATE_DESC"


export const makeSortDirsByNameAsc = action =>({
  type: SORT_DIRS_BY_NAME_ASC, 
  action
})

export const makeSortDirsByNameDesc = action => ({
  type: SORT_DIRS_BY_NAME_DESC,
  action
})

export const makeSortDirsByDateAsc = action => ({
  type: SORT_DIRS_BY_DATE_ASC,
  action
})

export const makeSortDirsByDateDesc = action => ({
  type: SORT_DIRS_BY_DATE_DESC,
  action
})
