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

import SignInForm from "../components/PageSignIn/SignInForm"
import { userLogin } from "../api/users/userLogin"

const mapStateToProps = state => ({
  profile: state.user
})

class SignInFormWrap extends Component {
  //add constructor for two input "email" & "password"
  constructor() {
    super()
    this.state = {
      //value default of "email" & "password"
      email: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this) //create new function identical
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value }) //dynamique value email or password
  }

  render() {
    return (
      <SignInForm
        email={this.state.email}
        onEmailChange={this.handleChange}
        password={this.state.password}
        onPasswordChange={this.handleChange}
        onSubmit={userLogin()}
      />
    )
  }
}

export default connect(mapStateToProps)(SignInFormWrap)
