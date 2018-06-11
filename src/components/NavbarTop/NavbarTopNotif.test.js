//TODO: Test create component notif

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import NavbarTopNotif from "./NavbarTopNotif"

const notifsCount = 6

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<NavbarTopNotif notifsCount={notifsCount} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer
    .create(<NavbarTopNotif notifsCount={notifsCount} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
