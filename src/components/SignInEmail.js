//TODO: create a email input
import React from "react"
import { Form, FormGroup, Label, Input, NavLink } from "reactstrap"

export default class SignInEmail extends React.Component {
  render() {
    return (
      <Form
        style={{
          "margin-bottom": "40px",
          "margin-top": "60px"
        }}
      >
        <FormGroup>
          <Label for="email">Email </Label>
          <Input type="email" name="email" id="IdEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label style={{ "margin-top": "30px" }} for="password">
            Password
          </Label>
          <NavLink
            style={{
              display: "inline",
              "font-size": "14px",
              "font-weight": "normal",
              "font-style": "normal",
              "font-stretch": "normal",
              "line-height": "normal",
              "letter-spacing": "normal",
              "text-align": "right",
              color: "#7a57d1",
              "padding-left": "130px"
            }}
            href="#"
          >
            Forgot password?
          </NavLink>
          <Input
            type="password"
            name="password"
            id="IdPassword"
            placeholder="Password"
          />
        </FormGroup>
      </Form>
    )
  }
}
