// TODO create navbar

import React from "react"
import { NavLink } from "reactstrap"

const Link = ({ icon, nameLink }) => (
  <div>
    <NavLink href="#">
      <img alt="" src={icon} />
      {nameLink}
    </NavLink>
    <hr />
  </div>
)

export default Link
