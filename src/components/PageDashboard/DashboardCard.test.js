import React from "react"
import ReactDOM from "react-dom"
import DashboardCard from "./DashboardCard"
import renderer from "react-test-renderer"

const cardContent = {
  id: 0,
  image: "img/folder.ico",
  titre: "Documents requests",
  bio:
    "Take the first step to launching your store. Add physical items, digital downloads you can dream up.",
  buttonText: "Create first request",
  link: "lien0"
}

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<DashboardCard {...cardContent} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
it("renders link html", () => {
  const tree = renderer.create(<DashboardCard {...cardContent} />).toJSON()
  expect(tree).toMatchSnapshot()
})
