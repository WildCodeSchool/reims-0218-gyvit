//TODO: create component search bar
// 2 props: search a afficher dans value de l'input
//          onSearchType a appelé sur l'évenement onchange de l'input
// faire un SearchContainer, qui stockera dans son state, un search

import React from "react"
import {
  FormGroup,
  Input,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownToggle
} from "reactstrap"

const NavbarTopSearch = ({ options, search, onSearchType }) => (
  <div>
    <FormGroup>
      <Input
        class="typeahead form-control"
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
        options={options}
        value={search}
      />

      <Dropdown isOpen={search && true}>
        <DropdownMenu
          style={{
            transform: "none",
            marginLeft: "5px",
            width: "100%"
          }}
        >
          <DropdownToggle
            style={{ visibility: "hidden" }}
            onClick={() => console.log("fire pew pew")}
          />
          {search !== "" &&
            options.map(option => (
              <DropdownItem key={option.value} value={option.value}>
                {option.name}
              </DropdownItem>
            ))}
        </DropdownMenu>
      </Dropdown>
    </FormGroup>
  </div>
)

export default NavbarTopSearch
