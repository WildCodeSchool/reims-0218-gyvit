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
    <Navbar expand="md">
      <NavbarBrand>Folders</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem />
          <NavItem>
            <Button color="primary">+</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}
export default FoldersBarTop
