//TODO TEST ContentFile

import React from "react"
import ReactDOM from "react-dom"
// import renderer from "react-test-renderer"
import ContentFile from "./ContentFile"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ContentFile />, div)
  ReactDOM.unmountComponentAtNode(div)
})
