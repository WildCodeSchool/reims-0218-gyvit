// TODO create navbar

import React from "react"
import PropTypes from "prop-types"
import { Row, Col } from "reactstrap"
import { NavLink } from "react-router-dom"

const style = {
  color: "cyan"
}

const NavbarLeftItem = ({ icon, nameLink, link }) => (
  <div>
    <Row>
      <Col xs="12">
        <NavLink
          to={link}
          activeStyle={style}
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
              opacity: 0.8
            }}
          />
          {nameLink}
        </NavLink>
      </Col>
    </Row>
    <hr />
  </div>
)

NavbarLeftItem.propTypes = {
  icon: PropTypes.string.isRequired,
  nameLink: PropTypes.string.isRequired
}

export default NavbarLeftItem
