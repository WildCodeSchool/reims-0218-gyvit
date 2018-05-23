import React, { Component } from "react"

import "./App.css"
import { Container, Row, Col } from "reactstrap"

import Content from "./components/Content"

const name = "Kevin"

const toto = [
  {
    image: "",
    titre: "Documents requests",
    bio:
      "Take the first step to launching your store. Add physical items, digital downloads you can dream up",
    buttonText: "Create first request"
  },
  {
    image: "",
    titre: "Share documents",
    bio:
      "Take the first step to launching your store. Add physical items, digital downloads you can dream up",
    buttonText: "Share documents"
  },
  {
    image: "",
    titre: "Store files",
    bio:
      "Take the first step to launching your store. Add physical items, digital downloads you can dream up",
    buttonText: "Upload documents"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Gyvit, {name}.</h1>
        <h2>What would you like to do ?</h2>
        <Content elements={toto} />
      </div>
    )
  }
}

export default App
