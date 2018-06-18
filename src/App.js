import React, { Component } from "react"
import "./App.css"
import logo from "./logo.svg"
import NavbarTopFilter from "./containers/SearchContainer"
import PageFolders from "./components/PageFolders/PageFolders"

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageFolders />
      </div>
    )
  }
}

export default App
