import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import FoldersTable from "./FoldersTable"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<FoldersTable />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<FoldersTable />).toJSON()
  expect(tree).toMatchSnapshot()
})
