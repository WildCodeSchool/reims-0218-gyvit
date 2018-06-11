export const FETCH_FOLDERS_SUCCESS = "FETCH_FOLDERS_SUCCESS"
export const ADD_A_FOLDER_ACTION = "ADD_A_FOLDER_ACTION"
export const DELETE_FOLDER_ACTION = "DELETE_FOLDER_SUCCES "
export const DELETE_A_FOLDER_SUCCESS = "DELETE_FOLDER_ACTION "


export const makeFetchFoldersSuccess = response => ({
  type: FETCH_FOLDERS_SUCCESS,
  response
})

export const makeAddAFolderSuccess = response => ({
  type: ADD_A_FOLDER_ACTION,
  response
})

export const makeDeleteAFolderSuccess = folderId => ({
  type: DELETE_A_FOLDER_SUCCESS,
  folderId
 })

 

