import React from "react"
import { Media } from "reactstrap"
import PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap.min.css"

const NavbarTopProfile = ({ firstname, lastname, business }) => (
  <div>
    <Media>
      <Media href="#">
        <Media
          style={{
            marginTop: "25px",
            width: "40px",
            height: "40px"
          }}
          className="rounded-circle"
          object
          src="img/kevinMarlot.jpeg"
          alt={firstname}
        />
      </Media>
      <Media body>
        <Media
          style={{
            color: "#231b56",
            fontSize: "16px",
            marginTop: "28px",
            marginLeft: "0"
          }}
          heading
        >
          <span>{firstname}</span> <span>{lastname}</span>
        </Media>

        <Media
          style={{
            color: "#372c78",
            marginTop: "5px",
            marginLeft: "21px",
            fontSize: "14px"
          }}
        >
          {business}
        </Media>
      </Media>
    </Media>
  </div>
)

NavbarTopProfile.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  business: PropTypes.string.isRequired
}

export default NavbarTopProfile
