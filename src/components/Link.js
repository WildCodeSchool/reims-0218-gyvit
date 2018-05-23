// TODO create navbar

import React from "react"
import { Nav, NavItem, NavLink } from "reactstrap"

const Link = ({ icon, nameLink }) => (
  <div>
    <Nav vertical>
      <NavItem>
        <NavLink href="#">Home</NavLink>
      </NavItem>
    </Nav>
    <hr />
  </div>
)

export default Link
