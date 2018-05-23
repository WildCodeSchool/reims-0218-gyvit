import React, { Component } from "react"

import logo from "./logo.svg"
import "./App.css"

import Article from "./components/Article"
import Content from "./components/Content"

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Article />
        <Content elements={toto} />
      </div>
    )
  }
}

export default App
