//TODO: test:  navbar top with search bar, notification icon and profile.

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import PageForgotPassword from "./PageForgotPassword"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<PageForgotPassword />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<PageForgotPassword />).toJSON()
  expect(tree).toMatchSnapshot()
})
