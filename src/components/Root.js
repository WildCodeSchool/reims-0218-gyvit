//TODO: PAGE SIGN UP
import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

import PageSignIn from "../components/PageSignIn/PageSignIn"
import PageFolders from "../components/PageFolders/PageFolders"
import PageGetStarted from "../components/PageGetStarted/PageGetStarted"
import PageForgetPassword from "../components/PageForgotPassword/PageForgotPassword"
import PageDashboardContainer from "../containers/PageDashboardContainer"
import { hasToken } from "../api/users/localStorageToken"
import ModalErrorContainer from "../containers/ModalCreateDirContainer"
import App from "../App"

//function test token true or false for protect routes
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      hasToken() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/sign-in"
          }}
        />
      )
    }
  />
)
//Routes for NavBarLeft
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <PrivateRoute path="/" exact component={PageDashboardContainer} />
        <Route path="/sign-in" component={PageSignIn} />
        <Route path="/sign-up" component={PageSignIn} />{" "}
        {/* TODO: PAGE SIGN UP */}
        <Route path="/forgot-password" component={PageForgetPassword} />
        <PrivateRoute path="/dashboard" component={PageDashboardContainer} />
        <PrivateRoute path="/dirs" component={PageFolders} />
        <PrivateRoute path="/get-started" component={PageGetStarted} />
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root
