// TODO create navbar

import React from "react"
import PropTypes from "prop-types"
import { NavLink, Container, Row } from "reactstrap"

const NavbarLeftItem = ({ icon, nameLink }) => (
  <div>
    <Container>
      <Row>
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
              text: "center",
              opacity: 0.8,
              paddingRight: 10
            }}
          />
          {nameLink}
        </NavLink>
      </Row>
    </Container>
    <hr />
  </div>
)

NavbarLeftItem.propTypes = {
  icon: PropTypes.string.isRequired,
  nameLink: PropTypes.string.isRequired
}

export default NavbarLeftItem
