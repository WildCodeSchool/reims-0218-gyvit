//TODO test navbar list of links

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import ListLink from "./ListLink"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ListLink />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<ListLink />).toJSON()
  expect(tree).toMatchSnapshot()
})
