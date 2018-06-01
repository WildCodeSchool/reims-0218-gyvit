//TODO CREATE TEST

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import SignInEmail from "./SignInTitle"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<SignInEmail />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<SignInEmail />).toJSON()
  expect(tree).toMatchSnapshot()
})
