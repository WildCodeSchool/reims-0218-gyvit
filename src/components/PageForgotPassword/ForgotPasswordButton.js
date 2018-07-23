import React from "react"
import { Button } from "reactstrap"

const ForgotPasswordButton = () => (
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
      Demande d'un nouveau mot de passe
    </Button>
  </div>
)

export default ForgotPasswordButton
