import { makeDeleteFileAction } from "../actions/actions"

import deleteFileReducers from "./deleteFileReducers"

describe("deleteFile", () => {
  it("should not change the state for unhandled action", () => {
    const prevState = [
      {
        id: "1file_7F2jhzx5RlO8u5C1SP3c",
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
          id: "dir_r4V13RVeHFFVvOLctpPe",
          object: "directory",
          name: "Sketchs & Photoshops",
          created: "2018-03-30T11:53:23+00:00",
          modified: "2018-03-30T12:11:15+00:00"
        }
      },
      {
        id: "2file_7F2jhzx5RlO8u5C1SP3c",
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
          id: "dir_r4V13RVeHFFVvOLctpPe",
          object: "directory",
          name: "Sketchs & Photoshops",
          created: "2018-03-30T11:53:23+00:00",
          modified: "2018-03-30T12:11:15+00:00"
        }
      },
      {
        id: "3file_7F2jhzx5RlO8u5C1SP3c",
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
          id: "dir_r4V13RVeHFFVvOLctpPe",
          object: "directory",
          name: "Sketchs & Photoshops",
          created: "2018-03-30T11:53:23+00:00",
          modified: "2018-03-30T12:11:15+00:00"
        }
      }
    ]

    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(deleteFileReducers(prevState, anyAction)).toEqual(prevState)
  })

  it("should handle deleting a file", () => {
    const prevState = [
      {
        id: "1file_7F2jhzx5RlO8u5C1SP3c",
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
          id: "dir_r4V13RVeHFFVvOLctpPe",
          object: "directory",
          name: "Sketchs & Photoshops",
          created: "2018-03-30T11:53:23+00:00",
          modified: "2018-03-30T12:11:15+00:00"
        }
      },
      {
        id: "2file_7F2jhzx5RlO8u5C1SP3c",
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
          id: "dir_r4V13RVeHFFVvOLctpPe",
          object: "directory",
          name: "Sketchs & Photoshops",
          created: "2018-03-30T11:53:23+00:00",
          modified: "2018-03-30T12:11:15+00:00"
        }
      },
      {
        id: "3file_7F2jhzx5RlO8u5C1SP3c",
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
          id: "dir_r4V13RVeHFFVvOLctpPe",
          object: "directory",
          name: "Sketchs & Photoshops",
          created: "2018-03-30T11:53:23+00:00",
          modified: "2018-03-30T12:11:15+00:00"
        }
      }
    ]

    const expectedState = [
      {
        id: "1file_7F2jhzx5RlO8u5C1SP3c",
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
          id: "dir_r4V13RVeHFFVvOLctpPe",
          object: "directory",
          name: "Sketchs & Photoshops",
          created: "2018-03-30T11:53:23+00:00",
          modified: "2018-03-30T12:11:15+00:00"
        }
      },
      {
        id: "2file_7F2jhzx5RlO8u5C1SP3c",
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
          id: "dir_r4V13RVeHFFVvOLctpPe",
          object: "directory",
          name: "Sketchs & Photoshops",
          created: "2018-03-30T11:53:23+00:00",
          modified: "2018-03-30T12:11:15+00:00"
        }
      }
    ]

    const deleteOneFileAction = makeDeleteFileAction(
      "3file_7F2jhzx5RlO8u5C1SP3c"
    )

    expect(deleteFileReducers(prevState, deleteOneFileAction)).toEqual(
      expectedState
    )
  })
})
