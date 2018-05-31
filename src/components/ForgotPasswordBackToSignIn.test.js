//TODO CREATE TEST

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import ForgotPasswordBackToSignIn from "./ForgotPasswordBackToSignIn"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ForgotPasswordBackToSignIn />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<ForgotPasswordBackToSignIn />).toJSON()
  expect(tree).toMatchSnapshot()
})
