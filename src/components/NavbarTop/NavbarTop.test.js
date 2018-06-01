//TODO: test:  navbar top with search bar, notification icon and profile.

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import NavbarTop from "./NavbarTop"

const props = {
  notif: {
    notifsCount: 6
  },
  profile: {
    lastname: "Duflot",
    firstname: "Romain",
    business: "Notoriety"
  }
}

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<NavbarTop {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<NavbarTop {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
