export const SHOW_MODAL_ERROR = "SHOW_MODAL_ERROR"
export const HIDE_MODAL_ERROR = "HIDE_MODAL_ERROR"

export const makeShowModalError = response => ({
  type: SHOW_MODAL_ERROR,
  visibilityError: true,
  message: response.message,
  error: response.error
})

export const makeHideModalError = () => ({
  type: HIDE_MODAL_ERROR,
  visibilityError: false,
  message: "",
  error: ""
})
