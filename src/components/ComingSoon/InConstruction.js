import React from "react"
import { Container } from "reactstrap"
import "../../App.css"

const ComingSoon = () => {
  return (
    <Container>
      <div>
        <img
          style={{
            marginLeft: "38%",
            marginTop: "12%"
          }}
          src="img/MeduzaIcon.png"
          alt="meduza icon"
          class="logo"
        />
        <h1
          style={{
            color: "#231b56",
            fontSize: "40px",
            fontStyle: "gras",
            marginLeft: "35%",
            marginTop: "3%"
          }}
        >
          Coming Soon !!
        </h1>
      </div>
    </Container>
  )
}
export default ComingSoon
