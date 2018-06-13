//TODO: Rename this SigninForm done
// Add the signin button  done
// Make it a presentational (function) componenent
// 3 function props onMailChange, onPasswordChange, onSubmit
// 2 value props mail and password
// Create a SigninContainer that will have a this.state.mail and this.state.password value
// and functions handlemailChange and handlePasswordChange that will do setState
// submitLogin that will do login fetch then stores token and do retrieveMe fetch then dispatch retrieveMeSuccess

import React from "react"
import { Form, FormGroup, Label, Input, NavLink, Button } from "reactstrap"

const SignInForm = ({
  mail,
  password,
  onMailChange,
  onPasswordChange,
  onSubmit
}) => (
  <div>
    <Form
      style={{
        marginBottom: "40px",
        marginTop: "60px"
      }}
    >
      <FormGroup>
        <Label for="mail">Email </Label>
        <Input
          style={{ width: "80%" }}
          value={mail}
          onChange={onMailChange}
          type="email"
          name="mail"
          id="Idmail"
          placeholder="Mail"
        />
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
            width: "50%"
          }}
          href="#"
        >
          Forgot password?
        </NavLink>
        <Input
          style={{ width: "80%" }}
          value={password}
          onChange={onPasswordChange}
          type="password"
          name="password"
          id="IdPassword"
          placeholder="Password"
        />
      </FormGroup>
      <Button
        type="button"
        onClick={onSubmit}
        style={{
          width: "192px",
          height: "54px",
          marginTop: "40px",
          borderRadius: "100px",
          backgroundImage: "linear-gradient(to left, #57aad1, #7a57d1)"
        }}
        //color="info"
      >
        Sign in
      </Button>
    </Form>
  </div>
)

export default SignInForm
