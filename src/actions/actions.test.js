import { FETCH_FILES_SUCCESS, makeFetchFilesSuccess } from "./actions"

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
