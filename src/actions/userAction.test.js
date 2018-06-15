import {
  CONNECT_USER_SUCCESS,
  DISCONNECT_USER_SUCCESS,
  disconnectUserSuccessAction,
  connectUserSuccessAction
} from "./userAction"

describe("action make User in State", () => {
  it("should return an action CONNECT_USER_SUCCESS", () => {
    const response = {
      _id: "acct_I9eMdLN3o9e2Ju78lKeN",
      object: "account",
      mail: "romain@meduza-studio.com",
      lastname: "Duflot",
      firstname: "Romain",
      role: "user",
      active: 1,
      created: "2018-03-29T00:00:00+00:00",
      modified: "2018-03-29T00:00:00+00:00"
    }
    const expected = {
      type: CONNECT_USER_SUCCESS,
      response: {
        _id: "acct_I9eMdLN3o9e2Ju78lKeN",
        object: "account",
        mail: "romain@meduza-studio.com",
        lastname: "Duflot",
        firstname: "Romain",
        role: "user",
        active: 1,
        created: "2018-03-29T00:00:00+00:00",
        modified: "2018-03-29T00:00:00+00:00"
      }
    }
    expect(connectUserSuccessAction(response)).toEqual(expected)
  })
})

describe("action emptying user in state", () => {
  it("should empty user in state", () => {
    const response = { success: false }

    const expected = {
      type: DISCONNECT_USER_SUCCESS,
      response: { success: false }
    }

    expect(disconnectUserSuccessAction(response)).toEqual(expected)
  })
})
