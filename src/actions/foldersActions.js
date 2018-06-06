export const FETCH_FOLDERS_SUCCESS = "FETCH_FOLDERS_SUCCESS"
export const ADD_FOLDERS_ACTIONS = "ADD_FOLDERS_ACTIONS"

export const makeFetchFoldersSuccess = response => ({
  type: FETCH_FOLDERS_SUCCESS,
  response
})

export const makeAddFoldersSuccess = response => ({
  type: ADD_FOLDERS_ACTIONS,
  response
})
