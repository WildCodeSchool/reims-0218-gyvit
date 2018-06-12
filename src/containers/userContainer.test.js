import { connectUserSuccessAction } from "../actions/userAction"
import userReducer from "../reducers/userReducer"

describe("userContainer", () => {
  it("should return an object with connectUserSuccess property ", () => {
    const prevState = {}

    const expected = {
      user: "romain@meduza-studio.com"
    }

    const response = {
      success: true,
      data: {
        user: "romain@meduza-studio.com",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUyOTQwMjQ3OX0.AvPfmn2tVtNPzBWYXkzhpcmfMqc3Sl43XWAdvAn8kqQ"
      }
    }
    expect(userReducer(prevState, connectUserSuccessAction(response))).toEqual(
      expected
    )
  })
})
