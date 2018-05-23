//TODO: test : component notif bubble icon

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import NavbarTopNotifBubble from "./NavbarTopNotifBubble"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<NavbarTopNotifBubble />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<NavbarTopNotifBubble />).toJSON()
  expect(tree).toMatchSnapshot()
})
