import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import GetStartedSignInContent from "./GetStartedSignInContent"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<GetStartedSignInContent />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<GetStartedSignInContent />).toJSON()
  expect(tree).toMatchSnapshot()
})
