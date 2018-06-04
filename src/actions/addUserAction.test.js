import { ADD_USER, makeAddUserAction } from "./addUserAction"

describe("action Add User", () => {
  it("should return an action ADD_USER", () => {
    const expected = {
      type: ADD_USER,
      userId: 1
    }
    expect(makeAddUserAction(1)).toEqual(expected)
  })
})
