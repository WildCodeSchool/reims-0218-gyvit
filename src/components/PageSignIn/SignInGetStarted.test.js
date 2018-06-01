//TODO CREATE TEST

import React from "react"
import ReactDOM from "react-dom"
import SignInGetStarted from "./SignInGetStarted"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<SignInGetStarted />, div)
  ReactDOM.unmountComponentAtNode(div)
})
