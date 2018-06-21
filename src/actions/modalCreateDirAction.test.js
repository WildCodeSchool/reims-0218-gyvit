import {
  HIDE_MODAL_CREATE_DIR,
  SHOW_MODAL_CREATE_DIR,
  makeShowModalError,
  makeHideModalError
} from "./modalCreateDirAction"

describe("action show modal create dir", () => {
  it("should return a visibilityModaleCreateDir true in state", () => {
    const response = {
      visibilityModalCreateDir: true
    }
    const expected = {
      type: SHOW_MODAL_CREATE_DIR,
      visibilityModalCreateDir: true
    }
    const initialState = { visibilityModalCreateDir: false }
    expect(makeShowModalError(initialState, response)).toEqual(expected)
  })
})

describe("action hide modal create dir", () => {
  it("should return a visibilityModaleCreateDir false in state", () => {
    const response = {
      visibilityModalCreateDir: false
    }
    const expected = {
      type: HIDE_MODAL_CREATE_DIR,
      visibilityModalCreateDir: false
    }
    const initialState = { visibilityModalCreateDir: true }
    expect(makeHideModalError(initialState, response)).toEqual(expected)
  })
})
