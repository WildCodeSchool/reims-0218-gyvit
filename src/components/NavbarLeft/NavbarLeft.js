// TODO list of links to navbar

import React from "react"
import PropTypes from "prop-types"
import NavbarLeftItem from "./NavbarLeftItem"
import { Nav, NavItem, Container, Row } from "reactstrap"
import NavbarLeftLogo from "./NavbarLeftLogo"

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
          <NavItem className="text-center">
            {dataLinks.map((link, index) => (
              <NavbarLeftItem key={index} {...link} />
            ))}
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
