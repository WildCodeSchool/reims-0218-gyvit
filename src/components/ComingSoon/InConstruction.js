import React from "react"
import { Container } from "reactstrap"

const ComingSoon = () => {
  return (
    <Container>
      <img
        style={{
          marginLeft: "35%",
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
          marginLeft: "35%"
        }}
      >
        Coming Soon !!
      </p>
    </Container>
  )
}
export default ComingSoon
