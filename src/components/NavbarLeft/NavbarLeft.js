// TODO list of links to navbar

import React from "react"
import PropTypes from "prop-types"
import NavbarLeftItem from "./NavbarLeftItem"
import { Nav, NavItem, Row, Container } from "reactstrap"
import NavbarLeftLogo from "./NavbarLeftLogo"
import { link, settings } from "../../links"
import "./styles-navbar-left/navbarLeft.css"

const NavbarLeft = ({ dataLinks = link }) => (
  <Container>
    <Row>
      <Nav className="navbar-left" vertical expand="md" >
        <NavbarLeftLogo />
        <NavItem className="nav-item"  >
          {dataLinks.map((link, index) => (
            <NavbarLeftItem key={index} {...link} 
          />
          ))}
        </NavItem>
        <span className="border-0 border-dark"></span>
        <NavItem className="nav-item-settings">
          <NavbarLeftItem {...settings} />
        </NavItem>
      </Nav>
    </Row>
  </Container>
)

NavbarLeft.propTypes = {
  dataLinks: PropTypes.array
}

export default NavbarLeft
