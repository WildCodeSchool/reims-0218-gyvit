//TODO TEST link

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import Link from "./Link"

const homeLinkProps = {
  nameLink: "Home",
  icon: process.env.PUBLIC_URL + "/img/house_38533.ico"
}

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Link />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<Link {...homeLinkProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
