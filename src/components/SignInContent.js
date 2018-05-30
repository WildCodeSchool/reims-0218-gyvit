import React from "react"
import { Button } from "reactstrap"

const SignInContent = () => (
  <div
    style={{
      width: "980px",
      height: "1067px",
      background: "green",
      display: "inline"
    }}
  >
    <p
      style={{
        float: "left",
        "margin-top": "18px"
      }}
    >
      Don't have an account ?
    </p>
    <Button
      style={{
        width: "156px",
        height: "54px",
        "border-radius": "100px",
        border: "solid 1px #7a57d1",
        color: "#7a57d1"
      }}
    >
      Get Started
    </Button>
  </div>
)

export default SignInContent
