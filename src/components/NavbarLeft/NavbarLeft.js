import React from "react"
import PropTypes from "prop-types"

import { Nav, NavItem, Container, Row } from "reactstrap"
import NavbarLeftLogo from "./NavbarLeftLogo"
import Route from "../Route"

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
            <Route />
          </NavItem>
        </Nav>
      </Row>
    </Container>
  </div>
)
NavbarLeft.propTypes = {
  dataLinks: PropTypes.array
}
export default NavbarLeft
