import React from "react"
import ReactDOM from "react-dom"
import ContentFile from "./ContentFile"
import { DateTime } from "luxon"

<<<<<<< HEAD
const convertDateFromJsonToFrench = dateToTransform =>
=======
const convertDate = dateToTransform =>
>>>>>>> contentFile
  DateTime.fromMillis(Date.parse(dateToTransform))
    .setLocale("fr-fr")
    .toLocaleString(DateTime.DATETIME_SHORT)

const dirs = [
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
    ]
  }
]

const files = [
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

it("formats the date string from Json to display in a correct way", () => {
  const dateJson = "2018-03-29T00:00:00+00:00"
  const expected = "2018-3-29 02:00"
<<<<<<< HEAD
  expect(convertDateFromJsonToFrench(dateJson)).toEqual(expected)
=======
  expect(convertDate(dateJson)).toEqual(expected)
>>>>>>> contentFile
})

it("contentFile renders without crashing", () => {
  const table = document.createElement("table")
  ReactDOM.render(<ContentFile files={files} dirs={dirs} />, table)
  ReactDOM.unmountComponentAtNode(table)
})
