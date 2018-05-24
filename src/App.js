import React, { Component } from "react"
import "./App.css"
import SignInEmail from "./components/SignInEmail"
import Listlink from "./components/ListLink"
import NavbarTop from "./components/NavbarTop"
import SignInTitle from "./components/SignInTitle"
import SignInGetStarted from "./components/SignInGetStarted"
import SignInButton from "./components/SignInButton"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Listlink />
        <NavbarTop />
        <SignInTitle />
        <SignInEmail />
        <SignInButton />
        <SignInGetStarted />
      </div>
    )
  }
}

export default App
