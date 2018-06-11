// TODO: Create navbar

import React from "react"
import PropTypes from "prop-types"
import { NavLink } from "reactstrap"

const NavbarLeftItem = ({ icon, nameLink }) => (
  <div>
    <NavLink
      href="#"
      style={{
        color: "white",
        opacity: 0.5
      }}
    >
      <img
        alt=""
        src={icon}
        style={{
          opacity: 0.8,
          paddingRight: 10
        }}
      />

      {nameLink}
    </NavLink>
    <hr />
  </div>
)

NavbarLeftItem.propTypes = {
  icon: PropTypes.string.isRequired,
  nameLink: PropTypes.string.isRequired
}

export default NavbarLeftItem
