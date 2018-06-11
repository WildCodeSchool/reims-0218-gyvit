//TODO: Test useReducer in connection with userReducer

import { connectUserSuccessAction } from "../actions/userAction"

import userReducer from "./userReducer"

describe("userReducer", () => {
  it("should check the login is good", () => {
    const prevState = {
      user: "romain@meduza-studio.com"
    }

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(userReducer(prevState, anyAction)).toEqual(prevState)
  })

  it("should handle test user", () => {
    const prevState = {}

    const response = {
      success: true,
      data: {
        user: "romain@meduza-studio.com",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcxMDI4MX0.M1Ce6GdsMovZEqP1JwX4_fWo_O4zRsTUz82aStr4Rak"
      }
    }

    const expectedState = {
      user: "romain@meduza-studio.com"
    }

    const testUser = connectUserSuccessAction(response)

    expect(userReducer(prevState, testUser)).toEqual(expectedState)
  })
})
