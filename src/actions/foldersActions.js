export const FETCH_FOLDERS_SUCCESS = "FETCH_FOLDERS_SUCCESS"
export const ADD_A_FOLDER_SUCCESS = "ADD_A_FOLDER_SUCCESS"

export const makeFetchFoldersSuccess = response => ({
  type: FETCH_FOLDERS_SUCCESS,
  response
})

export const makeAddAFolderSuccess = response => ({
  type: ADD_A_FOLDER_SUCCESS,
  response
})
