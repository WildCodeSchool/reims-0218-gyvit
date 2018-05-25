import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import FoldersTableThead from "./FoldersTableThead"

it("renders without crashing", () => {
  const table = document.createElement("table")
  ReactDOM.render(<FoldersTableThead />, table)
  ReactDOM.unmountComponentAtNode(table)
})

it("renders link html", () => {
  const tree = renderer.create(<FoldersTableThead />).toJSON()
  expect(tree).toMatchSnapshot()
})
