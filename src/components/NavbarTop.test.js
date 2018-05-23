//TODO: test:  navbar top with search bar, notification icon and profile.

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import NavbarTopNotif from "./NavbarTopNotif"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<NavbarTopNotif />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<NavbarTopNotif />).toJSON()
  expect(tree).toMatchSnapshot()
})
