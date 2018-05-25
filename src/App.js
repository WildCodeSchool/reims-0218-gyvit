import React, { Component } from "react"
import "./App.css"

import Listlink from "./components/ListLink"
import NavbarTop from "./components/NavbarTop"
import ContentFile from "./components/ContentFile"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Listlink />
        <NavbarTop />
        <ContentFile />
      </div>
    )
  }
}

export default App
