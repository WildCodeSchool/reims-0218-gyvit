export const FETCH_FOLDERS_SUCCESS = "FETCH_FOLDERS_SUCCESS"
export const ADD_A_FOLDER_SUCCESS = "ADD_A_FOLDER_SUCCESS"
export const RETRIEVE_DIR_SUCCESS = "RETRIEVE_DIR_SUCCESS"
export const UPDATE_A_FOLDER_SUCCESS = "UPDATE_A_FOLDER_SUCCESS"
export const DELETE_A_FOLDER_SUCCESS = "DELETE_A_FOLDER_SUCCESS"
export const FILTER_ALL_DIRS = "FILTER_ALL_DIRS"

export const makeFetchFoldersSuccess = response => ({
  type: FETCH_FOLDERS_SUCCESS,
  response
})

export const makeAddAFolderSuccess = response => ({
  type: ADD_A_FOLDER_SUCCESS,
  response
})

export const makeRetrieveDirSuccess = response => ({
  type: RETRIEVE_DIR_SUCCESS,
  response
})
export const makeUpdateAFolderSuccess = response => ({
  type: UPDATE_A_FOLDER_SUCCESS,
  response
})

export const makeDeleteAFolderSuccess = folderId => ({
  type: DELETE_A_FOLDER_SUCCESS,
  folderId
})

export const makeFilterDirs = filter => ({
  type: FILTER_ALL_DIRS,
  filter
})
