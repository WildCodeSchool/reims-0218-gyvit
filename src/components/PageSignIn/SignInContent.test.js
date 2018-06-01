//TODO CREATE TEST

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import SignInContent from "./SignInButton"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<SignInContent />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<SignInContent />).toJSON()
  expect(tree).toMatchSnapshot()
})
