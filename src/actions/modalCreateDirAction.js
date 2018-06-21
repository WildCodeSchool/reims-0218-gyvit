export const SHOW_MODAL_CREATE_DIR = "SHOW_MODAL_CREATE_DIR"
export const HIDE_MODAL_CREATE_DIR = "HIDE_MODAL_CREATE_DIR"

export const makeShowModalCreateDir = () => ({
  type: SHOW_MODAL_CREATE_DIR
})

export const makeHideModalCreateDir = () => ({
  type: HIDE_MODAL_CREATE_DIR
})

export const makeValidateModalCreateDir = (name, destination) => ({
  type: HIDE_MODAL_CREATE_DIR,
  name: name,
  destination: destination
})
