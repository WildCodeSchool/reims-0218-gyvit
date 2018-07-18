import React from "react"
import { Form, FormGroup, Button, Label, Input, NavLink } from "reactstrap"
import "./styles-page-sign-in/signInForm.css"

export default class SignInEmail extends React.Component {
  render() {
    return (
      <Form className="formSignIn">
        <FormGroup>
          <Label for="email">Email </Label>
          <Input type="email" name="email" id="IdEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label style={{ marginTop: "30px" }} for="password">
            Password
          </Label>
          <NavLink className="navLink" href="/forgot-password">
            Forgot password?
          </NavLink>
          <Input
            type="password"
            name="password"
            id="IdPassword"
            placeholder="Password"
          />
          <Button className="buttonForm" color="info">
            Sign in
          </Button>
        </FormGroup>
      </Form>
    )
  }
}
