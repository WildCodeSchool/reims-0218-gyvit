export const SHOW_MODAL_ERROR = "SHOW_MODAL_ERROR"
export const HIDE_MODAL_ERROR = "HIDE_MODAL_ERROR"

export const makeShowModalError = () => ({
  type: SHOW_MODAL_ERROR,
  visibility: true
})

export const makeHideModalError = () => ({
  type: HIDE_MODAL_ERROR,
  visibility: false
})
