import React, { Component } from "react"
import { Form, FormGroup, Label, Input, Button, NavLink } from "reactstrap"

import { connect } from "react-redux"
//import { userLogin } from "../api/users/userLogin"

const mapStateToProps = state => {
  return {
    profile: state.user
  }
}

//const mapDispatchToProps = dispatch => {}

class SignInFormContainer extends Component {
  render() {
    return (
      <Form
        style={{
          marginBottom: "40px",
          marginTop: "60px"
        }}
      >
        <FormGroup>
          <Label for="email">Email </Label>
          <Input type="email" name="email" id="IdEmail" placeholder="Email" />
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
              paddingLeft: "130px"
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
          <Button
            style={{
              width: "192px",
              height: "54px",
              borderRadius: "100px",
              backgroundImage: "linear-gradient(to left, #57aad1, #7a57d1)"
            }}
            color="info"
          >
            Sign in
          </Button>
        </FormGroup>
      </Form>
    )
  }
}

export default connect(mapStateToProps)(SignInFormContainer)
