export const SHOW_MODAL_UPDATE_FILE = "SHOW_MODAL_UPDATE_FILE"
export const HIDE_MODAL_UPDATE_FILE = "HIDE_MODAL_UPDATE_FILE"

export const makeShowModalUpdateFile = (file, name) => ({
  type: SHOW_MODAL_UPDATE_FILE,
  file,
  name
})

export const makeHideModalUpdateFile = () => ({
  type: HIDE_MODAL_UPDATE_FILE
})
