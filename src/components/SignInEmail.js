//TODO: create a email input
import React from "react"
import { Form, FormGroup, Label, Input, NavLink } from "reactstrap"

export default class SignInEmail extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <Label for="email" hidden>
            Email
          </Label>
          <Input type="email" name="email" id="IdEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="password" hidden>
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="IdPassword"
            placeholder="Password"
          />
          <NavLink href="#">Forgot password?</NavLink>
        </FormGroup>
      </Form>
    )
  }
}
