export const SHOW_MODAL_CREATE_DIR = "SHOW_MODAL_CREATE_DIR"
export const HIDE_MODAL_CREATE_DIR = "HIDE_MODAL_CREATE_DIR"

export const makeShowModalError = () => ({
  type: SHOW_MODAL_CREATE_DIR,
  visibilityModalCreateDir: true
})

export const makeHideModalError = () => ({
  type: HIDE_MODAL_CREATE_DIR,
  visibilityModalCreateDir: false
})
