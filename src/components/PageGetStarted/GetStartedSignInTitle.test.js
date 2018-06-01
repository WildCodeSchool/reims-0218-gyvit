import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import GetStartedSignInTitle from "./GetStartedSignInTitle"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<GetStartedSignInTitle />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<GetStartedSignInTitle />).toJSON()
  expect(tree).toMatchSnapshot()
})
