import React, { Component } from "react"
import "./App.css"

import Listlink from "./components/ListLink"
import NavbarTop from "./components/NavbarTop"

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
        <Listlink />
        <NavbarTop />
      </div>
    )
  }
}

export default App
