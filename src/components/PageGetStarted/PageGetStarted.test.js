import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import PageGetStarted from "./PageGetStarted"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<PageGetStarted />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<PageGetStarted />).toJSON()
  expect(tree).toMatchSnapshot()
})
