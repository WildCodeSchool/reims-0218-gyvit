import {
  HIDE_MODAL_CREATE_DIR,
  SHOW_MODAL_CREATE_DIR,
  makeShowModalCreateDir,
  makeHideModalCreateDir
} from "./modalCreateDirAction"

describe("action show modal create dir", () => {
  it("should return a type SHOW_MODAL_CREATE_DIR  in state", () => {
    const expected = {
      type: SHOW_MODAL_CREATE_DIR
    }

    expect(makeShowModalCreateDir()).toEqual(expected)
  })
})

describe("action hide modal create dir", () => {
  it("should return a type HIDE_MODAL_CREATE_DIR  in state", () => {
    const expected = {
      type: HIDE_MODAL_CREATE_DIR
    }
    expect(makeHideModalCreateDir()).toEqual(expected)
  })
})
