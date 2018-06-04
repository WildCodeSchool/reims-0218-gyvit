import { IS_USER, isUserAction } from "./connectionAction"

describe("action isUser", () => {
  it("should return an action IS_USER", () => {
    const expected = {
      type: IS_USER,
      user: "romain@meduza-studio.com",
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyODcxMDI4MX0.M1Ce6GdsMovZEqP1JwX4_fWo_O4zRsTUz82aStr4Rak"
    }
    expect(isUserAction(expected.user, expected.token)).toEqual(expected)
  })
})
