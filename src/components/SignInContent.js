import React from "react"
import { Button, Row, Container } from "reactstrap"

const SignInContent = () => (
  <div
    style={{
      width: "max-width",
      height: "1067px",
      backgroundImage:
        "url('https://www.onecomputer.fr/wp-content/uploads/2016/01/blurred-background-81.jpg')",
      position: "relative"
    }}
  >
    <Container-fluid>
      <Row>
        <p
          style={{
            "margin-top": "49px",
            "margin-left": "280px",
            "padding-right": "50px",
            "font-size": "16px",
            "font-weight": "normal",
            "font-style": "normal",
            "font-stretch": "normal",
            "line-height": "normal",
            "letter-spacing": "normal",
            "text-align": "left",
            color: "#3b425d",
            position: "absolute"
          }}
        >
          Don't have an account ?
        </p>

        <Button
          outline
          style={{
            width: "156px",
            height: "54px",
            "border-radius": "100px",
            border: "solid 1px #7a57d1",
            color: "#7a57d1",
            "margin-top": "30px",
            "margin-left": "475px",

            textColor: "color: #7a57d1;"
          }}
        >
          Get Started
        </Button>
      </Row>
    </Container-fluid>
  </div>
)

export default SignInContent
