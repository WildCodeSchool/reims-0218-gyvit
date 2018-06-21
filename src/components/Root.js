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
import { hasToken } from "../api/users/localStorageToken"
import App from "../App"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      hasToken() === true ? (
        <Redirect to="/dashboard" />
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
