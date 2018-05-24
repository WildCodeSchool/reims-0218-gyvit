//TODO: create a email input
import React from "react"
import { Form, FormGroup, Label, Input, NavLink } from "reactstrap"

export default class SignInEmail extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" hidden>
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
          />
          <NavLink href="#">Forgot password?</NavLink>
        </FormGroup>
      </Form>
    )
  }
}
