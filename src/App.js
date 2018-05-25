import React, { Component } from "react"
import "./App.css"

import Listlink from "./components/ListLink"
import NavbarTop from "./components/NavbarTop"
import ListFile from "./components/ListFile"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Listlink />
        <NavbarTop />
        <ListFile />
      </div>
    )
  }
}

export default App
