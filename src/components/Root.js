//TODO: PAGE SIGN UP
import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

import PageSignIn from "../components/PageSignIn/PageSignIn"
import PageFolders from "../components/PageFolders/PageFolders"
import PageGetStarted from "../components/PageGetStarted/PageGetStarted"
import PageForgetPassword from "../components/PageForgotPassword/PageForgotPassword"
import PageDashboard from "../components/PageDashboard/PageDashboard"
import App from "../App"

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/sign-in" />
      )
    }
  />
)

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/sign-in" component={PageSignIn} />
        <Route path="/sign-up" component={PageSignIn} />
        <Route path="/forgot-password" component={PageForgetPassword} />
        <PrivateRoute path="/dashboard" component={PageDashboard} />
        <PrivateRoute path="/folders" component={PageFolders} />
        <PrivateRoute path="/get-started" component={PageGetStarted} />
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root
