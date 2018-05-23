//TODO CREATE TEST

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import SignInEnd from "./SignInEnd"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<SignInEnd />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<SignInEnd />).toJSON()
  expect(tree).toMatchSnapshot()
})
