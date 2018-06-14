import {
  connectUserSuccessAction,
  CONNECT_USER_SUCCESS
} from "../actions/userAction"

import userReducer from "./userReducer"

describe("userReducer", () => {
  it("should not change the state for unhandled action", () => {
    const prevState = {
      mail: "romain@meduza-studio.com",
      lastname: "Duflot",
      firstname: "Romain"
    }

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(userReducer(prevState, anyAction)).toEqual(prevState)
  })

  it("should set user when connect successful", () => {
    const prevState = {}

    const response = {
      mail: "romain@meduza-studio.com",
      lastname: "Duflot",
      firstname: "Romain"
    }

    const expectedState = {
      mail: "romain@meduza-studio.com",
      lastname: "Duflot",
      firstname: "Romain"
    }

    expect(userReducer(prevState, connectUserSuccessAction(response))).toEqual(
      expectedState
    )
  })
})
