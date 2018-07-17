import React, { Component } from "react"
import { Button, ButtonGroup } from "reactstrap"

class Example extends Component {
  constructor() {
    super()

    this.state = { count: 0 }

    this.onButtonClick = this.onButtonClick.bind(this)
  }

  onButtonClick() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render() {
    console.log(this.state.count, "render")
    return (
      <div>
        <ButtonGroup>
          <Button color="primary" onClick={() => this.onButtonClick()}>
            One
          </Button>
        </ButtonGroup>
        <p>Selected: {this.state.count}</p>
      </div>
    )
  }
}

export default Example
