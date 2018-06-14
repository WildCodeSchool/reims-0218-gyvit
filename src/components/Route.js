import React from "react"

import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import PageSignIn from "../components/PageSignIn/PageSignIn"
const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signIn">SignIn</Link>
        </li>
        <li>
          <Link to="/files">Files</Link>
        </li>
        <li>
          <Link to="/requests">Requests</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/templates">Templates</Link>
        </li>
        <li>
          <Link to="/share">Share</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/files" component={Files} />
      <Route path="/requests" component={Requests} />
      <Route path="/contact" component={Contact} />
      <Route path="/templates" component={Templates} />
      <Route path="/share" component={Share} />
      <Route path="/settings" component={Settings} />
    </div>
  </Router>
)
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
const SignIn = () => (
  <div>
    <PageSignIn />{" "}
  </div>
)
const Files = () => (
  <div>
    <h2>Files</h2>
  </div>
)
const Requests = () => (
  <div>
    <h2>Requests</h2>
  </div>
)
const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
)
const Templates = () => (
  <div>
    <h2>Templates</h2>
  </div>
)
const Share = () => (
  <div>
    <h2>Share</h2>
  </div>
)
const Settings = () => (
  <div>
    <h2>Settings</h2>
  </div>
)

export default BasicExample
