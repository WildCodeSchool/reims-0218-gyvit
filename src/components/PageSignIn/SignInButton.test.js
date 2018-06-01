//TODO CREATE TEST

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import SignInButton from "./SignInButton"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<SignInButton />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<SignInButton />).toJSON()
  expect(tree).toMatchSnapshot()
})
