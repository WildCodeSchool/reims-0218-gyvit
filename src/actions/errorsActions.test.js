import {
  HIDE_MODAL_ERROR,
  SHOW_MODAL_ERROR,
  makeShowModalError,
  makeHideModalError
} from "./errorsActions"

describe("action show modal", () => {
  it("should return a visibilityError true in state", () => {
    const response = {
      success: false,
      error: "Votre mot de passe est incorrect"
    }
    const expected = {
      type: SHOW_MODAL_ERROR,
      visibilityError: true,
      message: "Votre mot de passe est incorrect"
    }
    expect(makeShowModalError(response.error)).toEqual(expected)
  })
})

describe("action hide modal error", () => {
  it("should return a visibilityError false in state", () => {
    const response = {
      success: false,
      error: "Votre mot de passe est incorrect"
    }

    const expected = {
      type: HIDE_MODAL_ERROR,
      visibilityError: false
    }

    expect(makeHideModalError(response)).toEqual(expected)
  })
})
