//TODO: Test create component search bar

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import InputSearch from "./NavbarTopSearch"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<InputSearch />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<InputSearch />).toJSON()
  expect(tree).toMatchSnapshot()
})
