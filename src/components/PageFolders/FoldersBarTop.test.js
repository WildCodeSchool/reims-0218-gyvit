import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import FoldersBarTop from "./FoldersBarTop"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<FoldersBarTop />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<FoldersBarTop />).toJSON()
  expect(tree).toMatchSnapshot()
})
