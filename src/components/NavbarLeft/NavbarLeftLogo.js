import React from "react"
import { NavbarBrand } from "reactstrap"

const NavbarLeftLogo = () => {
  return (
    <NavbarBrand
      href="/"
      style={{
        color: "white",
        fontWeight: "bold",
        height: "90px",
        width: "220px",

        textAlign: "center",
        backgroundColor: "#181048"
      }}
    >
      <p>GYVIT</p>
    </NavbarBrand>
  )
}

export default NavbarLeftLogo
