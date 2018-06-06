import {
  FETCH_USER_CONNECTION_SUCCESS,
  DISCONNECT_USER_SUCCESS,
  disconnectUserAction,
  makeUserAction
} from "./userAction"

describe("action make User in State", () => {
  it("should return an action FETCH_USER_CONNECTION_SUCCESS", () => {
    const response = {
      success: true,
      data: {
        user: "romain@meduza-studio.com",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcxMDI4MX0.M1Ce6GdsMovZEqP1JwX4_fWo_O4zRsTUz82aStr4Rak"
      }
    }
    const expected = {
      type: FETCH_USER_CONNECTION_SUCCESS,
      user: "romain@meduza-studio.com"
    }
    expect(makeUserAction(response)).toEqual(expected)
  })
})

describe("action emptying user in state", () => {
  it("should empty user in state", () => {
    const expected = {
      type: DISCONNECT_USER_SUCCESS,
      user: ""
    }
    expect(disconnectUserAction()).toEqual(expected)
  })
})
