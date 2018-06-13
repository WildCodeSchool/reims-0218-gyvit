//TODO CREATE TEST

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import SignInGetStarted from "./SignInGetStarted"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<SignInGetStarted />, div)
  ReactDOM.unmountComponentAtNode(div)
})
it("renders link html", () => {
  const tree = renderer.create(<SignInGetStarted />).toJSON()
  expect(tree).toMatchSnapshot()
})
