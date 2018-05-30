//TODO: test:  navbar top with search bar, notification icon and profile.

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import PageSignIn from "./PageSignIn"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<PageSignIn />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<PageSignIn />).toJSON()
  expect(tree).toMatchSnapshot()
})
