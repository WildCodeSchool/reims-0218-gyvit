//TODO CREATE SIGN IN TITLE
import React from "react"
import { NavLink } from "reactstrap"

const SignInGetStarted = () => (
  <div style={{ marginTop: "2em" }}>
    <p>
      Pas encore inscrit ?
      <NavLink
        href="#"
        style={{
          display: "inline"
        }}
      >
        S'inscrire
      </NavLink>
    </p>
  </div>
)

export default SignInGetStarted
