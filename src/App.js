import React, { Component } from "react"
import "./App.css"
import FoldersTableWrap from "./containers/FoldersTableContainer"
import NavbarTopFilter from "./containers/SearchContainer"
import UploadFileFormContainer from "./containers/UploadFileFormContainer"
import SignInFormWrap from "./containers/SignInFormContainer"
class App extends Component {
  render() {
    return (
      <div>
        <NavbarTopFilter />
        <SignInFormWrap />
        <FoldersTableWrap />
        <UploadFileFormContainer />
      </div>
    )
  }
}

export default App
