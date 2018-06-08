import {
  FETCH_FILES_SUCCESS,
  makeFetchFilesSuccess,
  ADD_A_FILE_SUCCESS,
  makeAddAFileSuccess,
  UPDATE_FILE_SUCCESS,
  makeUpdateFileSuccess
} from "./filesActions"

//action FETCH_FILES_SUCCESS

const prevState = [
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
  },
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
  },
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

describe("action fetch files success", () => {
  it("should return a FETCH_FILES_SUCCESS action with response", () => {
    const expected = {
      type: FETCH_FILES_SUCCESS,
      response: [
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
        },
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
        },
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
    }
    expect(makeFetchFilesSuccess(prevState)).toEqual(expected)
  })
})

// action ADD_A_FILE_ACTION
describe("action add a file", () => {
  it("should return a ADD_A_FILE_ACTION with response", () => {
    const expectedAddAFileAction = {
      type: ADD_A_FILE_SUCCESS,
      response: {
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
    }
    expect(
      makeAddAFileSuccess({
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
      })
    ).toEqual(expectedAddAFileAction)
  })

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
    expect(makeUpdateFileSuccess(response)).toEqual(expected)
  })
})
