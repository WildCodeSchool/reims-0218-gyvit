import React, { Component } from "react"
import "./App.css"

import Listlink from "./components/ListLink"
import NavbarTop from "./components/NavbarTop"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Listlink />
        <NavbarTop />
      </div>
    )
  }
}

export default App
