import React from "react"
import { NavbarBrand } from "reactstrap"

const NavbarLeftLogo = () => {
  return (
    <NavbarBrand
      href="/"
      className="d-flex align-items-center"
      style={{
        color: "white",
        fontWeight: "bold",
        height: "90px",
        marginBottom: "0%",
        textAlign: "right",
        backgroundColor: "#181048",
        marginRight: "10%"
      }}
    >
      <p>GYVIT</p>
    </NavbarBrand>
  )
}

export default NavbarLeftLogo
