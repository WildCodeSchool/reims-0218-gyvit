//TODO: create component Profile

import React from "react"
import { NavItem, Media } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const NavbarTopProfile = ({ name, imgSrc, business }) => (
  <NavItem>
    <Media>
      <Media rounded-circle="true" href="#">
        <Media object src={imgSrc} />
      </Media>
      <Media body>
        <Media heading>{name}</Media>
        {business}
      </Media>
    </Media>
  </NavItem>
)

export default NavbarTopProfile
