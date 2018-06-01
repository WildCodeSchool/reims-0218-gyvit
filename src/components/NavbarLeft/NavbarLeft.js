// TODO list of links to navbar

import React from "react"
import NavbarLeftItem from "./NavbarLeftItem"
import { Nav, NavItem } from "reactstrap"
import NavbarLeftLogo from "./NavbarLeftLogo"

const NavbarLeft = ({ dataLinks }) => (
  <div>
    <NavbarLeftLogo />
    <Nav
      vertical
      light="true"
      expand="md"
      style={{
        width: "220px",
        height: "1024px",
        backgroundColor: "#231b56",
        color: "white"
      }}
    >
      <NavItem>
        {dataLinks.map((link, index) => (
          <NavbarLeftItem key={index} {...link} />
        ))}
      </NavItem>
    </Nav>
  </div>
)

export default NavbarLeft
