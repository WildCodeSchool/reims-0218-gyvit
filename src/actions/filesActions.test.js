import {
  FETCH_FILES_SUCCESS,
  makeFetchFilesSuccess,
  ADD_A_FILE_ACTION,
  makeAddAFileSuccess
} from "./filesActions"


import {DELETE_A_FOLDER_SUCCESS,

  deleteFolderAction} from "./foldersActions"
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
      type: ADD_A_FILE_ACTION,
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
})
      //Action delete folder

      describe("action make User in State", () => {
        it("should return DELETE_FOLDER_ACTION", () => {
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
                [
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
            
          const expected = {
            type: DELETE_FOLDER_ACTION,
             response:[
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
          
          ]} 
          expect(deleteFolderAction(prevState)).toEqual(expected)
        })
      })
      
      
      