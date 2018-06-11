//TODO: Test logo

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import NavbarLeftLogo from "./NavbarLeftLogo"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<NavbarLeftLogo />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<NavbarLeftLogo />).toJSON()
  expect(tree).toMatchSnapshot()
})
