//TODO: create component search bar

import React from "react"
import { FormGroup, Input, NavItem } from "reactstrap"

const NavbarTopNotif = () => (
  <NavItem>
    <FormGroup>
      <Input
        type="search"
        name="search"
        id="exampleSearch"
        placeholder="Search..."
      />
    </FormGroup>
  </NavItem>
)

export default NavbarTopNotif
