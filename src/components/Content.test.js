import React from "react"
import ReactDOM from "react-dom"
import Content from "./Content"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(
    <Content contenu={{ titre: "", bio: "", buttonText: "", image: "" }} />,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})