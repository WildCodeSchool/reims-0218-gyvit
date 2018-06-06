import { makeFetchFilesSuccess } from "../actions/actions"

import filesReducer from "./filesReducer"

describe("filesReducer", () => {
  it("should not change the state for unhandled action", () => {
    const prevState = [
      {
        sdfsdfsd: "é"
      }
    ]

    expect(filesReducer(prevState, makeFetchFilesSuccess)).toEqual(prevState)
  })
})
