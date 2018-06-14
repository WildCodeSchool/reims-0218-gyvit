import React, { Component } from "react"
import "./App.css"
import logo from "./logo.svg"
import NavbarTopFilter from "./containers/SearchContainer"
import FoldersTableWrap from "./containers/FoldersTableContainer"

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
        <NavbarTopFilter />
        <FoldersTableWrap files={[]} dirs={[]} />
      </div>
    )
  }
}

export default App
