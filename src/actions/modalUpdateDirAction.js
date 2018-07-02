export const SHOW_MODAL_UPDATE_DIR = "SHOW_MODAL_UPDATE_DIR"
export const HIDE_MODAL_UPDATE_DIR = "HIDE_MODAL_UPDATE_DIR"

export const makeShowModalUpdateDir = (dir, name) => ({
  type: SHOW_MODAL_UPDATE_DIR,
  dir,
  name
})

export const makeHideModalUpdateDir = () => ({
  type: HIDE_MODAL_UPDATE_DIR
})
