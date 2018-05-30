//TODO: create a email input
import React from "react"
import { Form, FormGroup, Label, Input, NavLink } from "reactstrap"

export default class SignInEmail extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="email">Email </Label>
          <NavLink style={{ display: "inline-block" }} href="#">
            Forgot password?
          </NavLink>
          <Input type="email" name="email" id="IdEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
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
