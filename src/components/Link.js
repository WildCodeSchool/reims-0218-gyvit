// TODO create navbar

import React from "react"
import { Nav, NavItem, NavLink } from "reactstrap"

const Link = ({ icon, nameLink }) => (
  <div>
    <Nav vertical>
      <NavItem>
        <img alt="" src={icon} />
        <NavLink href="#">{nameLink}</NavLink>
      </NavItem>
    </Nav>
    <hr />
  </div>
)

export default Link
