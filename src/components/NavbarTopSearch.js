//TODO: create component search bar

import React from "react"
import { FormGroup, Input, NavItem } from "reactstrap"

const NavbarTopSearch = () => (
  <NavItem className="col-8">
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

export default NavbarTopSearch
