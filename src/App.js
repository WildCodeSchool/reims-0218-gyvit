import React, { Component } from "react"

import "./App.css"

import Content from "./components/Content"

class App extends Component {
  // overwrite of constructor method
  constructor() {
    super()
    this.state = {
      actionHome: [
        {
          image: "",
          titre: "Documents requests",
          bio:
            "Take the first step to launching your store. Add physical items, digital downloads you can dream up",
          buttonText: "Create first request",
          link: "lien0"
        },
        {
          image: "",
          titre: "Share documents",
          bio:
            "Take the first step to launching your store. Add physical items, digital downloads you can dream up",
          buttonText: "Share documents",
          link: "lien1"
        },
        {
          image: "",
          titre: "Store files",
          bio:
            "Take the first step to launching your store. Add physical items, digital downloads you can dream up",
          buttonText: "Upload documents",
          link: "lien2"
        }
      ],
      name: "Kevin"
    }
  }
  // overwrite of render method
  render() {
    return <Content elements={this.state.actionHome} name={this.state.name} />
  }
}

export default App
