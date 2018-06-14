import React from "react"
import PropTypes from "prop-types"

import { Nav, NavItem, Container, Row } from "reactstrap"
import NavbarLeftLogo from "./NavbarLeftLogo"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import PageSignIn from "../PageSignIn/PageSignIn"

const NavbarLeft = ({ dataLinks = [] }) => (
  <div>
    <Container>
      <Row>
        <Nav
          vertical
          expand="md"
          style={{
            width: "220px",
            height: "1024px",
            backgroundColor: "#231b56",
            color: "white"
          }}
        >
          <NavbarLeftLogo />
          <NavItem>
            <Router>
              <div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/files">Files</Link>
                  </li>
                  <li>
                    <Link to="/requests">Requests</Link>
                  </li>
                </ul>

                <hr />
                <Route exact path="/" component={Home} />
                <Route path="/files" component={Files} />
                <Route path="/requests" component={Requests} />
              </div>
            </Router>
          </NavItem>
        </Nav>
      </Row>
    </Container>
  </div>
)
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
const Files = () => (
  <div>
    <PageSignIn />
  </div>
)
const Requests = () => (
  <div>
    <h2>Requests</h2>
  </div>
)
NavbarLeft.propTypes = {
  dataLinks: PropTypes.array
}

export default NavbarLeft
