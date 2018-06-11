// TODO: Test action login

import {
  CONNECT_USER_SUCCESS,
  DISCONNECT_USER_SUCCESS,
  disconnectUserSuccessAction,
  connectUserSuccessAction
} from "./userAction"

// Action CONNECT_USER_SUCCESS

describe("action make User in State", () => {
  it("should return an action CONNECT_USER_SUCCESS", () => {
    const response = {
      success: true,
      data: {
        user: "romain@meduza-studio.com",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcxMDI4MX0.M1Ce6GdsMovZEqP1JwX4_fWo_O4zRsTUz82aStr4Rak"
      }
    }
    const expected = {
      type: CONNECT_USER_SUCCESS,
      user: "romain@meduza-studio.com"
    }
    expect(connectUserSuccessAction(response)).toEqual(expected)
  })
})

//Action DISCONNECT_USER_SUCCESS

describe("action emptying user in state", () => {
  it("should empty user in state", () => {
    const expected = {
      type: DISCONNECT_USER_SUCCESS,
      user: ""
    }
    expect(disconnectUserSuccessAction()).toEqual(expected)
  })
})
