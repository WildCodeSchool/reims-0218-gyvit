//TODO: create component search bar

import React from "react"
import { FormGroup, Input } from "reactstrap"

const NavbarTopSearch = () => (
  <div>
    <FormGroup>
      <span class="fa fa-search" />
      <Input
        style={{
          marginTop: "22px",
          marginLeft: "46px",
          height: "46px",
          "background-color": "#fbfcfd",
          "border-radius": "2px",
          border: "none"
        }}
        type="search"
        name="search"
        id="exampleSearch"
        placeholder="Search..."
      />
    </FormGroup>
  </div>
)

export default NavbarTopSearch
