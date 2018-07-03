export const SHOW_MODAL_INFORMATIONS_DIR = "SHOW_MODAL_INFORMATIONS_DIR"
export const HIDE_MODAL_INFORMATIONS_DIR = "HIDE_MODAL_INFORMATIONS_DIR"

export const makeShowModalInformationsDir = (dir, name) => ({
  type: SHOW_MODAL_INFORMATIONS_DIR,
  dir,
  name
})

export const makeHideModalInformationsDir = () => ({
  type: HIDE_MODAL_INFORMATIONS_DIR
})
