import React, { Component } from "react"
import { Button, ButtonGroup } from "reactstrap"

class Example extends Component {
  constructor(props) {
    super(props)

    this.state = { rSelected: "" }

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this)
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected })
  }

  render() {
    return (
      <div>
        <h5>Radio Buttons</h5>
        <ButtonGroup>
          <Button
            color="primary"
            onClick={() => this.onRadioBtnClick(1)}
            active={this.state.rSelected === 1}
          >
            One
          </Button>
        </ButtonGroup>
        <p>Selected: {this.state.rSelected}</p>
      </div>
    )
  }
}

export default Example
