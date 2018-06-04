//TODO TEST link

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import NavbarLeftItem from "./NavbarLeftItem"

const homeLinkProps = {
  nameLink: "Home",
  icon: process.env.PUBLIC_URL + "/img/house_38533.ico"
}

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<NavbarLeftItem {...homeLinkProps} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<NavbarLeftItem {...homeLinkProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
