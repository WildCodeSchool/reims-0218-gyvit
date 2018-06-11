import {
  makeFetchFoldersSuccess,
  makeAddAFolderSuccess,
  makeDeleteAFolderSuccess
  
  } from "../actions/foldersActions"

import  foldersReducer  from "./foldersReducer"

describe("listAllFolders", () => {
  it("should not change the state for unhandled action", () => {
    const prevState = [
      {
        _id: "dir_DOl2kN3n9lMeedN90kL9",
        object: "directory",
        name: "SammTrading",
        created: "2018-03-29T00:00:00+00:00",
        modified: "2018-03-29T00:00:00+00:00",
        shares: [],
        files: [],
        dirs: [
          {
            _id: "dir_EoeInRgUgzMPh0aLN2nz",
            object: "directory",
            name: "Webshop",
            created: "2018-03-29T11:36:42+00:00",
            modified: "2018-03-29T11:36:42+00:00",
            shares: []
          }
        ],
        path: [
          {
            _id: "dir_kL9D9lMe3ndN90eOl2kN",
            object: "directory",
            name: "Meduza",
            created: "2018-03-29T00:00:00+00:00",
            modified: "2018-03-29T00:00:00+00:00",
            index: 0
          },
          {
            _id: "dir_3ndN90kL9D9lMeeOl2kN",
            object: "directory",
            name: "Clients",
            created: "2018-03-29T00:00:00+00:00",
            modified: "2018-03-29T00:00:00+00:00",
            index: 1
          }
        ],
        parent: {
          _id: "dir_3ndN90kL9D9lMeeOl2kN",
          object: "directory",
          name: "Clients",
          created: "2018-03-29T00:00:00+00:00",
          modified: "2018-03-29T00:00:00+00:00",
          index: 1
        }
      }
    ]

    expect(foldersReducer(prevState, makeFetchFoldersSuccess)).toEqual(
      prevState
    )
  })
})

describe("addAFolder", () => {
  it("should  change the state for add folder action", () => {
    const prevState = [
      {
        _id: "dir_DOl2kN3n9lMeedN90kL9",
        object: "directory",
        name: "SammTrading",
        created: "2018-03-29T00:00:00+00:00",
        modified: "2018-03-29T00:00:00+00:00",
        shares: [],
        files: [],
        dirs: [
          {
            _id: "dir_EoeInRgUgzMPh0aLN2nz",
            object: "directory",
            name: "Webshop",
            created: "2018-03-29T11:36:42+00:00",
            modified: "2018-03-29T11:36:42+00:00",
            shares: []
          }
        ],
        path: [
          {
            _id: "dir_kL9D9lMe3ndN90eOl2kN",
            object: "directory",
            name: "Meduza",
            created: "2018-03-29T00:00:00+00:00",
            modified: "2018-03-29T00:00:00+00:00",
            index: 0
          },
          {
            _id: "dir_3ndN90kL9D9lMeeOl2kN",
            object: "directory",
            name: "Clients",
            created: "2018-03-29T00:00:00+00:00",
            modified: "2018-03-29T00:00:00+00:00",
            index: 1
          }
        ],
        parent: {
          _id: "dir_3ndN90kL9D9lMeeOl2kN",
          object: "directory",
          name: "Clients",
          created: "2018-03-29T00:00:00+00:00",
          modified: "2018-03-29T00:00:00+00:00",
          index: 1
        }
      },
      {
        _id: "dir_DOl2kN3n9lMeedN90kL9",
        object: "directory",
        name: "SammTrading",
        created: "2018-03-29T00:00:00+00:00",
        modified: "2018-03-29T00:00:00+00:00",
        shares: [],
        files: [],
        dirs: [
          {
            _id: "dir_EoeInRgUgzMPh0aLN2nz",
            object: "directory",
            name: "Webshop",
            created: "2018-03-29T11:36:42+00:00",
            modified: "2018-03-29T11:36:42+00:00",
            shares: []
          }
        ],
        path: [
          {
            _id: "dir_kL9D9lMe3ndN90eOl2kN",
            object: "directory",
            name: "Meduza",
            created: "2018-03-29T00:00:00+00:00",
            modified: "2018-03-29T00:00:00+00:00",
            index: 0
          },
          {
            _id: "dir_3ndN90kL9D9lMeeOl2kN",
            object: "directory",
            name: "Clients",
            created: "2018-03-29T00:00:00+00:00",
            modified: "2018-03-29T00:00:00+00:00",
            index: 1
          }
        ],
        parent: {
          _id: "dir_3ndN90kL9D9lMeeOl2kN",
          object: "directory",
          name: "Clients",
          created: "2018-03-29T00:00:00+00:00",
          modified: "2018-03-29T00:00:00+00:00",
          index: 1
        }
      },
      {
        _id: "dir_DOl2kN3n9lMeedN90kL9",
        object: "directory",
        name: "SammTrading",
        created: "2018-03-29T00:00:00+00:00",
        modified: "2018-03-29T00:00:00+00:00",
        shares: [],
        files: [],
        dirs: [
          {
            _id: "dir_EoeInRgUgzMPh0aLN2nz",
            object: "directory",
            name: "Webshop",
            created: "2018-03-29T11:36:42+00:00",
            modified: "2018-03-29T11:36:42+00:00",
            shares: []
          }
        ],
        path: [
          {
            _id: "dir_kL9D9lMe3ndN90eOl2kN",
            object: "directory",
            name: "Meduza",
            created: "2018-03-29T00:00:00+00:00",
            modified: "2018-03-29T00:00:00+00:00",
            index: 0
          },
          {
            _id: "dir_3ndN90kL9D9lMeeOl2kN",
            object: "directory",
            name: "Clients",
            created: "2018-03-29T00:00:00+00:00",
            modified: "2018-03-29T00:00:00+00:00",
            index: 1
          }
        ],
        parent: {
          _id: "dir_3ndN90kL9D9lMeeOl2kN",
          object: "directory",
          name: "Clients",
          created: "2018-03-29T00:00:00+00:00",
          modified: "2018-03-29T00:00:00+00:00",
          index: 1
        }
      }
    ]

    const addAFolderAction = makeAddAFolderSuccess({
      _id: "dir_DOl2kN3n9lMeedN90kL9",
      object: "directory",
      name: "SammTrading",
      created: "2018-03-29T00:00:00+00:00",
      modified: "2018-03-29T00:00:00+00:00",
      shares: [],
      files: [],
      dirs: [
        {
          _id: "dir_EoeInRgUgzMPh0aLN2nz",
          object: "directory",
          name: "Webshop",
          created: "2018-03-29T11:36:42+00:00",
          modified: "2018-03-29T11:36:42+00:00",
          shares: []
        }
      ],
      path: [
        {
          _id: "dir_kL9D9lMe3ndN90eOl2kN",
          object: "directory",
          name: "Meduza",
          created: "2018-03-29T00:00:00+00:00",
          modified: "2018-03-29T00:00:00+00:00",
          index: 0
        },
        {
          _id: "dir_3ndN90kL9D9lMeeOl2kN",
          object: "directory",
          name: "Clients",
          created: "2018-03-29T00:00:00+00:00",
          modified: "2018-03-29T00:00:00+00:00",
          index: 1
        }
      ],
      parent: {
        _id: "dir_3ndN90kL9D9lMeeOl2kN",
        object: "directory",
        name: "Clients",
        created: "2018-03-29T00:00:00+00:00",
        modified: "2018-03-29T00:00:00+00:00",
        index: 1
      }
    })

    const expected = [
      {
        _id: "dir_DOl2kN3n9lMeedN90kL9",
        object: "directory",
        name: "SammTrading",
        created: "2018-03-29T00:00:00+00:00",
        modified: "2018-03-29T00:00:00+00:00",
        shares: [],
        files: [],
        dirs: [
          {
            _id: "dir_EoeInRgUgzMPh0aLN2nz",
            object: "directory",
            name: "Webshop",
            created: "2018-03-29T11:36:42+00:00",
            modified: "2018-03-29T11:36:42+00:00",
            shares: []
          }
        ],
        path: [
          {
            _id: "dir_kL9D9lMe3ndN90eOl2kN",
            object: "directory",
            name: "Meduza",
            created: "2018-03-29T00:00:00+00:00",
            modified: "2018-03-29T00:00:00+00:00",
            index: 0
          },
          {
            _id: "dir_3ndN90kL9D9lMeeOl2kN",
            object: "directory",
            name: "Clients",
            created: "2018-03-29T00:00:00+00:00",
            modified: "2018-03-29T00:00:00+00:00",
            index: 1
          }
        ],
        parent: {
          _id: "dir_3ndN90kL9D9lMeeOl2kN",
          object: "directory",
          name: "Clients",
          created: "2018-03-29T00:00:00+00:00",
          modified: "2018-03-29T00:00:00+00:00",
          index: 1
        }
      },
      {
        _id: "dir_DOl2kN3n9lMeedN90kL9",
        object: "directory",
        name: "SammTrading",
        created: "2018-03-29T00:00:00+00:00",
        modified: "2018-03-29T00:00:00+00:00",
        shares: [],
        files: [],
        dirs: [
          {
            _id: "dir_EoeInRgUgzMPh0aLN2nz",
            object: "directory",
            name: "Webshop",
            created: "2018-03-29T11:36:42+00:00",
            modified: "2018-03-29T11:36:42+00:00",
            shares: []
          }
        ],
        path: [
          {
            _id: "dir_kL9D9lMe3ndN90eOl2kN",
            object: "directory",
            name: "Meduza",
            created: "2018-03-29T00:00:00+00:00",
            modified: "2018-03-29T00:00:00+00:00",
            index: 0
          },
          {
            _id: "dir_3ndN90kL9D9lMeeOl2kN",
            object: "directory",
            name: "Clients",
            created: "2018-03-29T00:00:00+00:00",
            modified: "2018-03-29T00:00:00+00:00",
            index: 1
          }
        ],
        parent: {
          _id: "dir_3ndN90kL9D9lMeeOl2kN",
          object: "directory",
          name: "Clients",
          created: "2018-03-29T00:00:00+00:00",
          modified: "2018-03-29T00:00:00+00:00",
          index: 1
        }
      },
      {
        _id: "dir_DOl2kN3n9lMeedN90kL9",
        object: "directory",
        name: "SammTrading",
        created: "2018-03-29T00:00:00+00:00",
        modified: "2018-03-29T00:00:00+00:00",
        shares: [],
        files: [],
        dirs: [
          {
            _id: "dir_EoeInRgUgzMPh0aLN2nz",
            object: "directory",
            name: "Webshop",
            created: "2018-03-29T11:36:42+00:00",
            modified: "2018-03-29T11:36:42+00:00",
            shares: []
          }
        ],
        path: [
          {
            _id: "dir_kL9D9lMe3ndN90eOl2kN",
            object: "directory",
            name: "Meduza",
            created: "2018-03-29T00:00:00+00:00",
            modified: "2018-03-29T00:00:00+00:00",
            index: 0
          },
          {
            _id: "dir_3ndN90kL9D9lMeeOl2kN",
            object: "directory",
            name: "Clients",
            created: "2018-03-29T00:00:00+00:00",
            modified: "2018-03-29T00:00:00+00:00",
            index: 1
          }
        ],
        parent: {
          _id: "dir_3ndN90kL9D9lMeeOl2kN",
          object: "directory",
          name: "Clients",
          created: "2018-03-29T00:00:00+00:00",
          modified: "2018-03-29T00:00:00+00:00",
          index: 1
        }
      },
      {
        _id: "dir_DOl2kN3n9lMeedN90kL9",
        object: "directory",
        name: "SammTrading",
        created: "2018-03-29T00:00:00+00:00",
        modified: "2018-03-29T00:00:00+00:00",
        shares: [],
        files: [],
        dirs: [
          {
            _id: "dir_EoeInRgUgzMPh0aLN2nz",
            object: "directory",
            name: "Webshop",
            created: "2018-03-29T11:36:42+00:00",
            modified: "2018-03-29T11:36:42+00:00",
            shares: []
          }
        ],
        path: [
          {
            _id: "dir_kL9D9lMe3ndN90eOl2kN",
            object: "directory",
            name: "Meduza",
            created: "2018-03-29T00:00:00+00:00",
            modified: "2018-03-29T00:00:00+00:00",
            index: 0
          },
          {
            _id: "dir_3ndN90kL9D9lMeeOl2kN",
            object: "directory",
            name: "Clients",
            created: "2018-03-29T00:00:00+00:00",
            modified: "2018-03-29T00:00:00+00:00",
            index: 1
          }
        ],
        parent: {
          _id: "dir_3ndN90kL9D9lMeeOl2kN",
          object: "directory",
          name: "Clients",
          created: "2018-03-29T00:00:00+00:00",
          modified: "2018-03-29T00:00:00+00:00",
          index: 1
        }
      }
    ]

    expect(foldersReducer(prevState, addAFolderAction)).toEqual(expected)
  })
})

// delete folder

describe("deleteFolder", () => {
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

    expect(foldersReducer(prevState, anyAction)).toEqual(prevState)
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

    const deleteAFolderSuccess = makeDeleteAFolderSuccess(
      "3file_7F2jhzx5RlO8u5C1SP3c"
    )

    expect(foldersReducer(prevState, deleteAFolderSuccess)).toEqual(
      expectedState
    )
  })
})
