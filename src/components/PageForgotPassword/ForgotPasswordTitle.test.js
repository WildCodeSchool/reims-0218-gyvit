//TODO CREATE TEST

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import ForgotPasswordTitle from "./ForgotPasswordTitle"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ForgotPasswordTitle />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<ForgotPasswordTitle />).toJSON()
  expect(tree).toMatchSnapshot()
})
