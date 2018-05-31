//TODO: test: create component search bar

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import PageFolders from "./PageFolders"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<PageFolders />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<PageFolders />).toJSON()
  expect(tree).toMatchSnapshot()
})
