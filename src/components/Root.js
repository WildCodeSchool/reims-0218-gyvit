import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom"

import PageSignIn from "../components/PageSignIn/PageSignIn"
import PageFolders from "../components/PageFolders/PageFolders"
import PageGetStarted from "../components/PageGetStarted/PageGetStarted"
import PageForgetPassword from "../components/PageForgotPassword/PageForgotPassword"
import PageDashboard from "../components/PageDashboard/PageDashboard"
import App from "../App"
import { retrieveMe } from "../api/users/retrieveMe"

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/sign-in" component={PageSignIn} />
        <Route path="/sign-up" component={PageSignIn} />{" "}
        {/* TODO: PAGE SIGN UP */}
        <Route path="/dashboard" component={PageDashboard} />
        <Route path="/folders" component={PageFolders} />
        <Route path="/get-started" component={PageGetStarted} />
        <Route path="/forgot-password" component={PageForgetPassword} />
      </div>
    </Router>
  </Provider>
)
/* 
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
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
      retrieveMe().isAuthenticated ? (
        <PageDashboard />
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
login = () => {
  fakeAuth.authenticate(() => {
    this.setState({ redirectToReferrer: true })
  })
} */

Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root
