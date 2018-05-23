import React, { Component } from "react"
import "./App.css"
import SignInEmail from "./components/SignInEmail"
import Listlink from "./components/ListLink"
import NavbarTop from "./components/NavbarTop"
import SignInTitle from "./components/SignInTitle"
import SignInEnd from "./components/SignInEnd"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Listlink />
        <NavbarTop />
        <SignInTitle />
        <SignInEmail />
        <SignInEnd />
      </div>
    )
  }
}

export default App
