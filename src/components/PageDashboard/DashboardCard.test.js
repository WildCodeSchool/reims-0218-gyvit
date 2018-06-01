import React from "react"
import ReactDOM from "react-dom"
import DashboardCard from "./DashboardCard"
import renderer from "react-test-renderer"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<DashboardCard />, div)
  ReactDOM.unmountComponentAtNode(div)
})
it("renders link html", () => {
  const tree = renderer.create(<DashboardCard />).toJSON()
  expect(tree).toMatchSnapshot()
})
