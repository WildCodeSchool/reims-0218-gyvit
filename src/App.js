import React, { Component } from "react"
import "./App.css"
import logo from "./logo.svg"
import FoldersTableWrap from "./containers/FoldersTableContainer"
import NavbarTopFilter from "./containers/SearchContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarTopFilter />
        <FoldersTableWrap />
      </div>
    )
  }
}

export default App
