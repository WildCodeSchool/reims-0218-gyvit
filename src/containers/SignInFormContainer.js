//TODO: Rename this SigninForm done
// Add the signin button  done
// Make it a presentational (function) componenent
// 3 function props onEmailChange, onPasswordChange, onSubmit
// 2 value props email and password
// Create a SigninContainer that will have a this.state.email and this.state.password value
// and functions handleEmailChange and handlePasswordChange that will do setState
// submitLogin that will do login fetch then stores token and do retrieveMe fetch then dispatch retrieveMeSuccess
import React, { Component } from "react"
import { connect } from "react-redux"
import { Form, FormGroup, Label, Input, NavLink, Button } from "reactstrap"

import { userLogin } from "../api/users/userLogin"
import {
  connectUserSuccessAction,
  connectUserFailAction
} from "../actions/userAction"
import { makeShowModalError } from "../actions/errorsActions"
import { retrieveMe } from "../api/users/retrieveMe"
import ModalErrorContainer from "./ModalErrorContainer"

//dispatch connectUserSuccessAction
const mapDispatchToProps = dispatch => ({
  onUserFailed: response => {
    dispatch(connectUserFailAction(response))
    dispatch(makeShowModalError(response.error))
  },
  onUserConnected: response => dispatch(connectUserSuccessAction(response))
})

class SignInFormWrap extends Component {
  //add constructor for two input "email" & "password"
  constructor() {
    super()
    this.state = {
      //value default of "email" & "password"
      mail: "",
      password: "",
      visibilityError: false,
      message: ""
    }
    this.handleChange = this.handleChange.bind(this) //create new function identical
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({ [event.target.name]: event.target.value }) //dynamique value email or password
  }

  render() {
    return (
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
              value={this.state.mail}
              onChange={this.handleChange}
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
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              id="IdPassword"
              placeholder="Password"
            />
          </FormGroup>
          <ModalErrorContainer />
          <Button
            type="button"
            onClick={() =>
              userLogin(this.state.mail, this.state.password)
                .then(response => {
                  if (response.success) {
                    return retrieveMe()
                  } else {
                    return response
                  }
                })
                .then(response => {
                  console.log(
                    "response second then: " + JSON.stringify(response)
                  )
                  if (response._id !== undefined) {
                    return this.props.onUserConnected(response)
                  } else if (!response.success) {
                    // emptying user AND fill errors in props when connect failed
                    this.props.onUserFailed(response)
                    console.log("apres vidage")
                  }
                })
            }
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
  }
}

export default connect(null, mapDispatchToProps)(SignInFormWrap) // If you want to use mapDispatchToProps without a mapStateToProps just use null for the first argument.
