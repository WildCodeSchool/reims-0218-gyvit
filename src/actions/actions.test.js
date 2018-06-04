import { FETCH_FILES_SUCCESS, makeFetchFilesSuccess } from "./actions"

//add a json response json


describe("action fetch files success", () => {
  it("should return a FETCH_FILES_SUCCESS action with response", () => {
    const expected = {
      type: FETCH_FILES_SUCCESS,
      response: 
    }
    expect(makeFetchFilesSuccess()).toEqual(expected)
  })
})
