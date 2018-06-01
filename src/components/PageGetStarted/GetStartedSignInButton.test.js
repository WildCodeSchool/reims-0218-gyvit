import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import GetStartedSignInButton from "./GetStartedSignInButton"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<GetStartedSignInButton />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<GetStartedSignInButton />).toJSON()
  expect(tree).toMatchSnapshot()
})
