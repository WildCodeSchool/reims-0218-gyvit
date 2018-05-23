import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import link from "./Link"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<link />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders NavbarLeftLink html", () => {
  const tree = renderer.create(<link />).toJSON()
  expect(tree).toMatchSnapshot()
})
