// TODO create navbar

import React from "react"
import { NavLink } from "reactstrap"

const Link = ({ icon, nameLink }) => (
  <div>
    <NavLink
      href="#"
      style={{
        color: "white",
        opacity: 0.2
      }}
    >
      <img
        alt=""
        src={icon}
        style={{
          opacity: 0.2
        }}
      />

      {nameLink}
    </NavLink>
    <hr />
  </div>
)

export default Link
