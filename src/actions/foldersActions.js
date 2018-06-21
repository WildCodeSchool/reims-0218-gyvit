export const FETCH_FOLDERS_SUCCESS = "FETCH_FOLDERS_SUCCESS"
export const ADD_A_FOLDER_SUCCESS = "ADD_A_FOLDER_SUCCESS"
export const RETRIEVE_DIR_SUCCESS = "RETRIEVE_DIR_SUCCESS"
export const UPDATE_A_FOLDER_SUCCESS = "UPDATE_A_FOLDER_SUCCESS"
export const DELETE_A_FOLDER_SUCCESS = "DELETE_A_FOLDER_SUCCESS"
export const LIST_ALL_DIRS = "LIST_ALL_DIRS"
export const REPLACE_FOLDERS_BY_FILE = "REPLACE_FOLDERS_BY_FILE"

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

export const makeReplaceFolder = response => ({
  type: REPLACE_FOLDERS_BY_FILE,
  response
})

export const makeDeleteAFolderSuccess = folderId => ({
  type: DELETE_A_FOLDER_SUCCESS,
  folderId
})

export const makeListAllDirs = response => ({
  type: LIST_ALL_DIRS,
  response
})
