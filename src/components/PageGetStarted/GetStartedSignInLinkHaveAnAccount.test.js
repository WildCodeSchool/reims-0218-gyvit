import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import GetStartedSignInLinkHaveAnAccount from "./GetStartedSignInLinkHaveAnAccount"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<GetStartedSignInLinkHaveAnAccount />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<GetStartedSignInLinkHaveAnAccount />).toJSON()
  expect(tree).toMatchSnapshot()
})
