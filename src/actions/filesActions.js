export const FETCH_FILES_SUCCESS = "FETCH_FILES_SUCCESS"
export const ADD_A_FILE_SUCCESS = "ADD_A_FILE_SUCCESS"
export const UPDATE_A_FILE_SUCCESS = "UPDATE_A_FILE_SUCCESS"
export const DELETE_A_FILE_SUCCESS = "DELETE_A_FILE_SUCCESS"
export const RETRIEVE_DIR_SUCCESS = "RETRIEVE_DIR_SUCCESS"
export const LIST_INFORMATIONS_FILE_SUCCESS = "LIST_INFORMATIONS_FILE_SUCCESS"

export const makeFetchFilesSuccess = response => ({
  type: FETCH_FILES_SUCCESS,
  response
})

export const makeAddAFileSuccess = response => ({
  type: ADD_A_FILE_SUCCESS,
  response
})

export const makeUpdateAFileSuccess = response => ({
  type: UPDATE_A_FILE_SUCCESS,
  response
})

export const makeDeleteAFileSuccess = fileId => ({
  type: DELETE_A_FILE_SUCCESS,
  fileId
})

export const makeRetrieveFileSuccess = response => ({
  type: RETRIEVE_DIR_SUCCESS,
  response
})

export const makeInformationsFile = response => ({
  type: LIST_INFORMATIONS_FILE_SUCCESS,
  response
})
