export const FETCH_FILES_SUCCESS = "FETCH_FILES_SUCCESS"
export const ADD_A_FILE_ACTION = "ADD_A_FILE_ACTION"
export const DELETE_FILE_ACTION = "DELETE_FILE_ACTION"

export const makeFetchFilesSuccess = response => ({
  type: FETCH_FILES_SUCCESS,
  response
})

export const makeAddAFileSuccess = response => ({
  type: ADD_A_FILE_ACTION,
  response
})

export const makeDeleteFileAction = fileId => ({
  type: DELETE_FILE_ACTION,
  fileId
})
