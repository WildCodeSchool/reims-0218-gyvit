import React from "react"
import { Button } from "reactstrap"

const SignInContent = () => (
  <div
    style={{
      width: "980px",
      height: "1067px",
      background: "green"
    }}
  >
    <Button
      style={{
        width: "192px",
        height: "54px",
        "border-radius": "100px",
        "background-image": "linear-gradient(to left, #57aad1, #7a57d1)"
      }}
      color="info"
    >
      Sign in
    </Button>
  </div>
)

export default SignInContent
