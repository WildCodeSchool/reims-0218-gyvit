import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import FetchApiContainer from "./FetchApiContainer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<FetchApiContainer />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<FetchApiContainer />).toJSON()
  expect(tree).toMatchSnapshot()
})
