import { UPDATE_FILE_SUCCESS, updateFileAction } from "./updateFileAction"

describe("action UPDATE_FILE", () => {
  it("should return an action UPDATE_FILE_SUCCESS", () => {
    const response = {
      _id: "file_7F2jhzx5RlO8u5C1SP3c",
      object: "file",
      name: "Just for tests",
      size: 0,
      ext: "",
      type: "",
      remove: 0,
      created: "2018-04-22T08:34:26+00:00",
      modified: "2018-06-07T07:55:02+00:00",
      removed: null
    }
    const expected = {
      type: UPDATE_FILE_SUCCESS,
      response: response
    }
    expect(updateFileAction(response)).toEqual(expected)
  })
})
