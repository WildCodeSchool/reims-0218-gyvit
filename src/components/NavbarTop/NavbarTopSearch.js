//TODO: create component search bar
// 2 props: search a afficher dans value de l'input
//          onSearchType a appelé sur l'évenement onchange de l'input
// faire un SearchContainer, qui stockera dans son state, un search

import React from "react"
import { FormGroup, Input } from "reactstrap"

const NavbarTopSearch = ({ search, onSearchType }) => (
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
        type="multiple"
        name="search"
        id="exampleSearch"
        placeholder="Search..."
        onChange={onSearchType}
        value={search}
      />
    </FormGroup>
  </div>
)

export default NavbarTopSearch
