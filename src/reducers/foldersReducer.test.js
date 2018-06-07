import { makeFetchFoldersSuccess } from "../actions/foldersActions"
import { makeAddAFolderSuccess } from "../actions/foldersActions"

import { listAllFolders, addAFolder } from "./foldersReducer"

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

    expect(listAllFolders(prevState, makeFetchFoldersSuccess)).toEqual(
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

    expect(addAFolder(prevState, addAFolderAction)).toEqual(expected)
  })
})