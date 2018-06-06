import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import FoldersContainer from "./FoldersContainer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<FoldersContainer />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<FoldersContainer />).toJSON()
  expect(tree).toMatchSnapshot()
})
