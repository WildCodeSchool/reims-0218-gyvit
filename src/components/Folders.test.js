import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import Folders from "./Folders"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Folders />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<Folders />).toJSON()
  expect(tree).toMatchSnapshot()
})
