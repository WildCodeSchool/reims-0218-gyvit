import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import FoldersTableCategory from "./FoldersTableCategory"

const name = "Kevin"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<FoldersTableCategory name={name} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<FoldersTableCategory name={name} />).toJSON()
  expect(tree).toMatchSnapshot()
})
