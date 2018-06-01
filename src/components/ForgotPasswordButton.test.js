//TODO CREATE TEST

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import ForgotPasswordButton from "./ForgotPasswordButton"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ForgotPasswordButton />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<ForgotPasswordButton />).toJSON()
  expect(tree).toMatchSnapshot()
})
