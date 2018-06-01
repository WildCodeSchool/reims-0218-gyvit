import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import GetStartedForm from "./GetStartedForm"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<GetStartedForm />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<GetStartedForm />).toJSON()
  expect(tree).toMatchSnapshot()
})
