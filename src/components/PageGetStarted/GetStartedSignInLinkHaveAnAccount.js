//TODO CREATE SIGN IN TITLE
import React from "react"
import { NavLink } from "reactstrap"

const GetStartedSignInLinkHaveAnAccount = () => (
  <div
    style={{
      "margin-top": "120px",
      width: "300px",
      height: "16px",
      fontSize: "16px",
      fontWeight: "normal",
      fontStyle: "normal",
      "letter-spacing": "normal",
      "text-align": "left",
      color: "#3b425d"
    }}
  >
    <p>
      Already have an account ?
      <NavLink
        href="#"
        style={{
          display: "inline"
        }}
      >
        Sign in
      </NavLink>
    </p>
  </div>
)

export default GetStartedSignInLinkHaveAnAccount
