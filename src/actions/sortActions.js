export const SORT_DIRS_BY_NAME_ASC = "SORT_DIRS_BY_NAME_ASC"
export const SORT_DIRS_BY_NAME_DESC = "SORT_DIRS_BY_NAME_DESC "
export const SORT_DIRS_BY_LAST_UPDATE_ASC = "SORT_DIRS_BY_LAST_UPDATE_ASC"
export const SORT_DIRS_BY_LAST_UPDATE_DESC = "SORT_DIRS_BY_LAST_UPDATE_DESC"


export const makeSortDirsByNameAsc = () =>({
  type: SORT_DIRS_BY_NAME_ASC, 
  
})

export const makeSortDirsByNameDesc = () => ({
  type: SORT_DIRS_BY_NAME_DESC,

})

export const makeSortDirsByLastUpdateAsc = () => ({
  type: SORT_DIRS_BY_LAST_UPDATE_ASC,
})

export const makeSortDirsByLastUpdateDesc = () => ({
  type: SORT_DIRS_BY_LAST_UPDATE_DESC,
})
