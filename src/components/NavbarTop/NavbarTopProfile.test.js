//TODO: Test component Profile

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import NavbarTopProfile from "./NavbarTopProfile"

const profile = { firstname: "kevin", lastname: "Marlot", business: "Meduza" }

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<NavbarTopProfile {...profile} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<NavbarTopProfile {...profile} />).toJSON()
  expect(tree).toMatchSnapshot()
})
