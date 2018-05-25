import React, { Component } from "react"
import "./App.css"
import SignInEmail from "./components/SignInEmail"
import Listlink from "./components/ListLink"
import NavbarTop from "./components/NavbarTop"
import SignInTitle from "./components/SignInTitle"
import SignInGetStarted from "./components/SignInGetStarted"
import SignInButton from "./components/SignInButton"
import Folders from "./components/Folders"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Listlink />
        <NavbarTop />
        <SignInTitle />
        <SignInEmail />
        <SignInButton />
        <SignInGetStarted />
        <Folders />
      </div>
    )
  }
}

export default App
