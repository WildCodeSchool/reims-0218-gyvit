//TODO: create component search bar

import React from "react"
import { FormGroup, Input, NavItem } from "reactstrap"

const NavbarTopSearch = () => (
  <NavItem>
    <FormGroup>
      <span class="fa fa-search" />
      <Input
        style={{
          marginTop: "22px",
          marginLeft: "46px",
          width: "1020px",
          height: "46px",
          "background-color": "#fbfcfd",
          "border-radius": "2px"
        }}
        type="search"
        name="search"
        id="exampleSearch"
        placeholder="Search..."
      />
    </FormGroup>
  </NavItem>
)

export default NavbarTopSearch
