//TODO: Test component notif bubble icon

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import NavbarTopNotifBubble from "./NavbarTopNotifBubble"

const notifsCount = 6

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<NavbarTopNotifBubble notifsCount={notifsCount} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer
    .create(<NavbarTopNotifBubble notifsCount={notifsCount} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
