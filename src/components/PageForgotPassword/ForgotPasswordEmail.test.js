//TODO CREATE TEST

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import ForgotPasswordEmail from "./ForgotPasswordEmail"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ForgotPasswordEmail />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<ForgotPasswordEmail />).toJSON()
  expect(tree).toMatchSnapshot()
})
