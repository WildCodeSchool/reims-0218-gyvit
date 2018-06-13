//TODO: create a email input
import React from "react"
import { Form, FormGroup, Label, Input, NavLink } from "reactstrap"

export default class SignInEmail extends React.Component {
  render() {
    return (
      <Form
        style={{
          marginBottom: "40px",
          marginTop: "60px"
        }}
      >
        <FormGroup>
          <Label for="email">Email
          
           </Label>
          <Input type="email" name="email" id="IdEmail" placeholder="Email" style={{width:"80%"}}/>
        </FormGroup>
        <FormGroup>
          <Label style={{ marginTop: "30px" }} for="password">
            Password
          </Label>
          <NavLink
            style={{
              display: "inline",
              fontSize: "14px",
              fontWeight: "normal",
              fontStyle: "normal",
              fontStretch: "normal",
              lineHeight: "normal",
              letterSpacing: "normal",
              textAlign: "right",
              color: "#7a57d1",
              paddingLeft: "10px",
              width:"50%"

            }}
            href="#"
          >
            Forgot password?
          </NavLink>

          <Input
           style={{width:"80%"}}
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
