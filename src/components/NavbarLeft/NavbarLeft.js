import React from "react"
import PropTypes from "prop-types"

import { Nav, NavItem, Container, Row } from "reactstrap"
import NavbarLeftLogo from "./NavbarLeftLogo"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { PageDashboard } from "../PageDashboard/PageDashboard"

export const NavbarLeft = ({ dataLinks = [] }) => (
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
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/topics">Topics</Link>
                  </li>
                </ul>

                <hr />
                <Route exact path="/" component={Home} />
              </div>
            </Router>
          </NavItem>
        </Nav>
      </Row>
    </Container>
  </div>
)
const Home = ({ elements, name }) => (
  <div>
    <PageDashboard elements={elements} name={name} />
  </div>
)
NavbarLeft.propTypes = {
  dataLinks: PropTypes.array
}

export default NavbarLeft
