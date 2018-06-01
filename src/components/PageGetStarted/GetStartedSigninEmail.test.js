import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import GetStartedSignInEmail from "./GetStartedSignInEmail"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<GetStartedSignInEmail />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<GetStartedSignInEmail />).toJSON()
  expect(tree).toMatchSnapshot()
})
