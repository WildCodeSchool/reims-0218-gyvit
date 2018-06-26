//TODO: create component search bar
// 2 props: search a afficher dans value de l'input
//          onSearchType a appelé sur l'évenement onchange de l'input
// faire un SearchContainer, qui stockera dans son state, un search

import React from "react"
import { FormGroup, Input } from "reactstrap"
import Async from "react-select"
import "react-select/dist/react-select.css"

const NavbarTopSearch = ({ search, onSearchType }) => (
  <div>
    <Async
      style={{
        marginTop: "22px",
        marginLeft: "6px",
        height: "46px",
        backgroundColor: "#fbfcfd",
        borderRadius: "2px",
        border: "none"
      }}
      type="search"
      name="form-field-name"
      id="exampleSearch"
      placeholder="Search..."
      onChange={onSearchType}
      value={search}
      options={this.onSearchType}
    />
  </div>
)

export default NavbarTopSearch
