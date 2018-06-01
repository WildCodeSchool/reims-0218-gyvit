//TODO CREATE TEST

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import ForgotPasswordContent from "./ForgotPasswordContent"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ForgotPasswordContent />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<ForgotPasswordContent />).toJSON()
  expect(tree).toMatchSnapshot()
})
