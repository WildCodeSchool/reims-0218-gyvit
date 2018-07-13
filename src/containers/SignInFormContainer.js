import React, { Component } from "react"
import { connect } from "react-redux"
import { Form, FormGroup, Label, Input, NavLink, Button } from "reactstrap"
import { Redirect } from "react-router"
import { userLogin } from "../api/users/userLogin"
import { connectUserSuccessAction } from "../actions/userAction"
import { makeShowModalError } from "../actions/errorsActions"
import { retrieveMe } from "../api/users/retrieveMe"
import ModalErrorContainer from "./ModalErrorContainer"
import { getToken } from "../api/users/localStorageToken"

//verify on store with redirect if user mail is present on this
const mapStateToProps = state => {
  return {
    visibilityError: state.visibilityError,
    message: state.message,
    redirect: state.user.mail
  }
}

const mapDispatchToProps = dispatch => ({
  onUserConnected: response => dispatch(connectUserSuccessAction(response)),
  onError: message => dispatch(makeShowModalError(message))
})

class SignInFormWrap extends Component {
  //add constructor for two input "email" & "password"
  constructor() {
    super()
    //value default of "email" & "password"
    this.state = {
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
    //if mail on the store, so redirect on page dashboard
    if (this.props.redirect) {
      return <Redirect to="/home" />
    }
    return (
      <div>
        <ModalErrorContainer />
        <Form
          style={{
            marginBottom: "40px",
            marginTop: "60px"
          }}
        >
          <FormGroup>
            <Label for="mail">Email</Label>
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
              href="/forgot-password"
            >
              Forgot password?
            </NavLink>
            <Input
              style={{ width: "80%" }}
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </FormGroup>
          <Button
            type="button"
            onClick={() => {
              return (
                userLogin(this.state.mail, this.state.password)
                  // catch response:  if not desired response, response.message
                  //                  if desired: response.success
                  .then(response => {
                    if (response.success) {
                      console.log("token AVANT retrieveMe: ", getToken())
                      return retrieveMe().then(res => {
                        console.log("res , first then after retrieveMe:  ", res)
                        return res
                      })
                    } else {
                      return response
                    }
                  })
                  .catch(response => this.props.onError(response.message))
                  .then(response => {
                    if (response._id !== undefined) {
                      this.props.onUserConnected(response)
                      // redirect dashboard here
                    } else if (!response.success) {
                      // emptying user AND fill errors in props when connect failed
                      this.props.onError(response.error)
                    }
                  })
              )
            }}
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

export default connect(mapStateToProps, mapDispatchToProps)(SignInFormWrap) // If you want to use mapDispatchToProps without a mapStateToProps just use null for the first argument.
