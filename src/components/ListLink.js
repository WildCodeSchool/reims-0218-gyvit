// TODO list of links to navbar

import React from "react"
import Link from "./Link"
import { Nav, NavItem } from "reactstrap"
import NavbarLeftLogo from "./NavbarLeftLogo"

const ListLink = ({ dataLinks }) => (
  <div>
    <NavbarLeftLogo />
    <Nav
      vertical
      light
      expand="md"
      style={{
        height: "1024px",
        backgroundColor: "#231b56",
        color: "white"
      }}
    >
      <NavItem>
        {dataLinks.map((link, index) => <Link key={index} {...link} />)}
      </NavItem>
    </Nav>
  </div>
)

export default ListLink
