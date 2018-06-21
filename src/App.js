import React, { Component } from "react"
import "./App.css"
import FoldersTableWrap from "./containers/FoldersTableContainer"
import NavbarTopFilter from "./containers/SearchContainer"

class App extends Component {
  render() {
    return (
      <div>
        <NavbarTopFilter />
        <FoldersTableWrap />
      </div>
    )
  }
}

export default App
