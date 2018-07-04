import React, { Component } from "react"
import { Container } from "reactstrap"

class InConstruction extends Component {
  render() {
    return (
      <div>
        <Container>
          <img
            style={{
              marginLeft: "43%",
              marginTop: "12%"
            }}
            src="img/MeduzaIcon.png"
            alt="meduza icon"
          />
          <p
            style={{
              color: "#231b56",
              fontSize: "40px",
              fontStyle: "gras",
              marginLeft: "40%"
            }}
          >
            Coming Soon !!
          </p>
        </Container>
      </div>
    )
  }
}
export default InConstruction
