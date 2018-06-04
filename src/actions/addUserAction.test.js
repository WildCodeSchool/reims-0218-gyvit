const makeAddUserAction = () => null

const ADD_USER = "ADD_USER"

describe("action Add User", () => {
  const expected = {
    type: ADD_USER,
    userId: 1
  }

  expect(makeAddUserAction(1)).toEqual(expected)
})
