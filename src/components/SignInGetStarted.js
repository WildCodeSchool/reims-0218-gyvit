//TODO CREATE SIGN IN TITLE
import React from "react"
import { NavLink } from "reactstrap"

const SignInGetStarted = () => (
  <div style={{ "margin-top": "120px" }}>
    <p>
      Don't have an account ?
      <NavLink
        href="#"
        style={{
          display: "inline"
        }}
      >
        Get started
      </NavLink>
    </p>
  </div>
)

export default SignInGetStarted
