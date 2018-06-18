import { makeShowModalError } from "../actions/errorsActions"

import errorsReducer from "./errorsReducer"

describe("errorsReducer", () => {
  it("should modify visibilityError and message in state", () => {
    const prevState = {}

    const response = {
      success: false,
      error: "Votre mot de passe est incorrect"
    }
    const expected = {
      visibilityError: true,
      message: "Votre mot de passe est incorrect"
    }
    expect(
      errorsReducer(prevState, makeShowModalError(response)).toEqual(expected)
    )
  })
})
