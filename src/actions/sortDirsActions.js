export const SORT_DIRS_BY_NAME_ASC = "SORT_DIRS_BY_NAME_ASC"
export const SORT_DIRS_BY_NAME_DESC = "SORT_DIRS_BY_NAME_DESC "
export const SORT_DIRS_BY_DATE_ASC = "SORT_DIRS_BY_DATE_ASC"
export const SORT_DIRS_BY_DATE_DESC = "SORT_DIRS_BY_DATE_DESC"

export const makeSortDirsByNameAsc = response => ({
  type: SORT_DIRS_BY_NAME_ASC,
  response
})

export const makeSortDirsByNameDesc = response => ({
  type: SORT_DIRS_BY_NAME_DESC,
  response
})

export const makeSortDirsByDateAsc = response => ({
  type: SORT_DIRS_BY_DATE_ASC,
  response
})

export const makeSortDirsByDateDesc = response => ({
  type: SORT_DIRS_BY_DATE_DESC,
  response
})
