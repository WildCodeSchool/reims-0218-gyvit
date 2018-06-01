//TODO CREATE TEST

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import SignInTitle from "./SignInTitle"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<SignInTitle />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<SignInTitle />).toJSON()
  expect(tree).toMatchSnapshot()
})
