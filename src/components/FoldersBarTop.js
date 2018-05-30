import React from "react"
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button
} from "reactstrap"

const FoldersBarTop = () => {
  return (
    <Navbar
      expand="xs"
      style={{
        "margin-top": "54px"
      }}
    >
      <NavbarBrand
        style={{
          width: "45px",
          height: "24px",
          "margin-left": "215px"
        }}
      >
        Folders
      </NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Button
              style={{
                width: "50px",
                height: "50px",
                "margin-right": "235px",
                "border-radius": "50%",
                "background-color": "#725fe3"
              }}
            >
              +
            </Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}
export default FoldersBarTop
