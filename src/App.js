import React, { Component } from "react"
import "./App.css"
// import logo from "./logo.svg"
// import NavbarTopFilter from "./containers/SearchContainer"
import PageDashboard from "./components/PageDashboard/PageDashboard"

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageDashboard />
      </div>
    )
  }
}

export default App
