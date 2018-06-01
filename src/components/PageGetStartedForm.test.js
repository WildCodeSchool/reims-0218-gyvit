import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import PageGetStartedForm from "./PageGetStartedForm"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<PageGetStartedForm />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders correctly", () => {
  const tree = renderer.create(<PageGetStartedForm />).toJSON()
  expect(tree).toMatchSnapshot()
})
