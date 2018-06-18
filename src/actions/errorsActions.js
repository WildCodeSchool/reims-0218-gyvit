export const SHOW_MODAL_ERROR = "SHOW_MODAL_ERROR"
export const HIDE_MODAL_ERROR = "HIDE_MODAL_ERROR"

export const makeShowModalError = message => ({
  type: SHOW_MODAL_ERROR,
  visibilityError: true,
  message
})

export const makeHideModalError = message => ({
  type: HIDE_MODAL_ERROR,
  visibilityError: false,
  message
})
