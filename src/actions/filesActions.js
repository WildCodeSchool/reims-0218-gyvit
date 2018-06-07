export const FETCH_FILES_SUCCESS = "FETCH_FILES_SUCCESS"
export const ADD_A_FILE_ACTION = "ADD_A_FILE_ACTION"

// export const ADD_DIRECTORY_ACTION = "ADD_DIRECTORY_ACTION"
// export const DELETE_DIRECTORY_ACTION = "DELETE_DIRECTORY_ACTION "
// export const UPDATE_DIRECTORY_ACTION = "UPDATE_DIRECTORY_ACTION"
// export const ADD_FILE_ACTION = "ADD_FILE_ACTION"
export const DELETE_FILE_ACTION = "DELETE_FILE_ACTION"
// export const UPDATE_FILE_ACTION = "UPDATE_FILE_ACTION"

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
