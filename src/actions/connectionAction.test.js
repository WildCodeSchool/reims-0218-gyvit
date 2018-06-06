import { FETCH_USER_SUCCESS, isUserAction } from "./connectionAction"

describe("action isUser", () => {
  it("should return an action FETCH_USER_SUCCESS", () => {
    const response = {
      success: true,
      data: {
        user: "romain@meduza-studio.com",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcxMDI4MX0.M1Ce6GdsMovZEqP1JwX4_fWo_O4zRsTUz82aStr4Rak"
      }
    }
    const expected = {
      type: FETCH_USER_SUCCESS,
      user: "romain@meduza-studio.com",
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcxMDI4MX0.M1Ce6GdsMovZEqP1JwX4_fWo_O4zRsTUz82aStr4Rak"
    }
    expect(isUserAction(response)).toEqual(expected)
  })
})
