import {
  FETCH_FOLDERS_SUCCESS,
  makeFetchFoldersSuccess,
  ADD_A_FOLDER_SUCCESS,
  makeAddAFolderSuccess
} from "./foldersActions"

//action FETCH_FOLDERS_SUCCESS

const prevStateFolders = [
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

describe("action fetch folders success", () => {
  it("should return a FETCH_FOLDERS_SUCCESS action with response", () => {
    const expected = {
      type: FETCH_FOLDERS_SUCCESS,
      response: [
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
    }
    expect(makeFetchFoldersSuccess(prevStateFolders)).toEqual(expected)
  })
})

// action ADD_A_FOLDER_ACTION

describe("action add a folder", () => {
  it("should return a ADD_A_FOLDER_ACTION with response", () => {
    const expectedAddAFolderAction = {
      type: ADD_A_FOLDER_SUCCESS,
      response: {
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
    }
    expect(
      makeAddAFolderSuccess({
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
    ).toEqual(expectedAddAFolderAction)
  })
})
