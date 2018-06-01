import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import FoldersTableCategory from "./FoldersTableCategory"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<FoldersTableCategory />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<FoldersTableCategory />).toJSON()
  expect(tree).toMatchSnapshot()
})
