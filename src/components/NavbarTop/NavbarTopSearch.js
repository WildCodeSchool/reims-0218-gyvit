//TODO: Create component search bar

import React from "react"
import { FormGroup, Input } from "reactstrap"

const NavbarTopSearch = () => (
  <div>
    <FormGroup>
      <span className="fa fa-search" />
      <Input
        style={{
          marginTop: "22px",
          marginLeft: "6px",
          height: "46px",
          backgroundColor: "#fbfcfd",
          borderRadius: "2px",
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
