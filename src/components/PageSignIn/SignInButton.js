import React from "react"
import { Button } from "reactstrap"

const SignInButton = () => (
  <div>
    <Button
      style={{
        width: "192px",
        height: "54px",
        borderRadius: "100px",
        
        backgroundImage: "linear-gradient(to left, #57aad1, #7a57d1)"
      }}
      color="info"
    >
      Sign in
    </Button>
  </div>
)

export default SignInButton
