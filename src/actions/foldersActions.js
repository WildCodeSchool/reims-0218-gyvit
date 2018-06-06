export const FETCH_FOLDERS_SUCCESS = "FETCH_FOLDERS_SUCCESS"

export const makeFetchFoldersSuccess = response => ({
  type: FETCH_FOLDERS_SUCCESS,
  response
})
