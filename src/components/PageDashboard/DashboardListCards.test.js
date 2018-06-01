import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"

import DashboardListCards from "./DashboardListCards"

const elements = [
  {
    id: 0,
    image: "",
    titre: "Documents requests",
    bio:
      "Take the first step to launching your store. Add physical items, digital downloads you can dream up",
    buttonText: "Create first request",
    link: "lien0"
  },
  {
    id: 1,
    image: "",
    titre: "Share documents",
    bio:
      "Take the first step to launching your store. Add physical items, digital downloads you can dream up",
    buttonText: "Share documents",
    link: "lien1"
  },
  {
    id: 2,
    image: "",
    titre: "Store files",
    bio:
      "Take the first step to launching your store. Add physical items, digital downloads you can dream up",
    buttonText: "Upload documents",
    link: "lien2"
  }
]

const name = "Kevin"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<DashboardListCards elements={elements} name={name} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
it("renders link html", () => {
  const tree = renderer
    .create(<DashboardListCards elements={elements} name={name} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
