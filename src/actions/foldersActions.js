export const FETCH_FOLDERS_SUCCESS = "FETCH_FOLDERS_SUCCESS"
export const ADD_A_FOLDER_ACTION = "ADD_A_FOLDER_ACTION"
export const DELETE_FOLDER_SUCCES = "DELETE_FOLDER_SUCCES "


export const makeFetchFoldersSuccess = response => ({
  type: FETCH_FOLDERS_SUCCESS,
  response
})

export const makeAddAFolderSuccess = response => ({
  type: ADD_A_FOLDER_ACTION,
  response
})

export const makeDeleteFolderSucces = folderId => ({
  type: DELETE_FOLDER_SUCCES,
  folderId
 })
