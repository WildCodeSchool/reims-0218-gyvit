import {
  makeFetchFilesSuccess,
  updateFileAction
} from "../actions/filesActions"
import { makeAddAFileSuccess } from "../actions/filesActions"

import { filesReducer, addAFile } from "./filesReducer"

describe("files", () => {
  it("should change the state for listFiles action", () => {
    const prevState = []

    const expected = [
      {
        _id: "file_7F2jhzx5RlO8u5C1SP3c",
        object: "file",
        name: "TEST FOR POST",
        size: 0,
        ext: "",
        type: "",
        remove: 0,
        created: "2018-04-22T08:34:26+00:00",
        modified: "2018-04-22T08:34:26+00:00",
        removed: null,
        shares: [],
        dir: {
          _id: "dir_r4V13RVeHFFVvOLctpPe",
          object: "directory",
          name: "Sketchs & Photoshops",
          created: "2018-03-30T11:53:23+00:00",
          modified: "2018-03-30T12:11:15+00:00"
        }
      }
    ]

    const response = {
      _id: "file_7F2jhzx5RlO8u5C1SP3c",
      object: "file",
      name: "TEST FOR POST",
      size: 0,
      ext: "",
      type: "",
      remove: 0,
      created: "2018-04-22T08:34:26+00:00",
      modified: "2018-04-22T08:34:26+00:00",
      removed: null,
      shares: [],
      dir: {
        _id: "dir_r4V13RVeHFFVvOLctpPe",
        object: "directory",
        name: "Sketchs & Photoshops",
        created: "2018-03-30T11:53:23+00:00",
        modified: "2018-03-30T12:11:15+00:00"
      }
    }
    expect(filesReducer(prevState, makeFetchFilesSuccess(response))).toEqual(
      expected
    )
  })

  it("should change the STATE with an updated file", () => {
    const prevState = {
      _id: "file_7F2jhzx5RlO8u5C1SP3c",
      object: "file",
      name: "TEST FOR POST",
      size: 0,
      ext: "",
      type: "",
      remove: 0,
      created: "2018-04-22T08:34:26+00:00",
      modified: "2018-04-22T08:34:26+00:00",
      removed: null,
      shares: [],
      dir: {
        _id: "dir_r4V13RVeHFFVvOLctpPe",
        object: "directory",
        name: "Sketchs & Photoshops",
        created: "2018-03-30T11:53:23+00:00",
        modified: "2018-03-30T12:11:15+00:00"
      }
    }

    const response = {
      _id: "file_7F2jhzx5RlO8u5C1SP3c",
      object: "file",
      name: "TEST FOR POST",
      size: 0,
      ext: "",
      type: "",
      remove: 0,
      created: "2018-04-22T08:34:26+00:00",
      modified: "2018-04-22T08:34:26+00:00",
      removed: null,
      shares: [],
      dir: {
        _id: "dir_r4V13RVeHFFVvOLctpPe",
        object: "directory",
        name: "Sketchs & Photoshops",
        created: "2018-03-30T11:53:23+00:00",
        modified: "2018-03-30T12:11:15+00:00"
      }
    }
    const expected = response
    expect(filesReducer(prevState, updateFileAction(response))).toEqual(
      expected
    )
  })

  it("should change the STATE with a new file", () => {
    const prevState = []

    const response = { header: { status: 200 } }
    const expected = { header: { status: 200 } }
    expect(addAFile(prevState, makeAddAFileSuccess(response))).toEqual(expected)
  })
})
