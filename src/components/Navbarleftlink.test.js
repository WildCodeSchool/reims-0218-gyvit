import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import Navbarleftlink from "./Navbarleftlink"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Navbarleftlink />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders Navbarleftlink html", () => {
  const tree = renderer.create(<Navbarleftlink />).toJSON()
  expect(tree).toMatchSnapshot()
})
