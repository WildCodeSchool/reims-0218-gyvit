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
import "./styles-navbar-top/navbarTopSearch.css"
//function to split with search criteria
const highlight = (text, search) => {
  const highlightSuggestion = text.toLowerCase().split(search.toLowerCase())
  return highlightSuggestion
}

const NavbarTopSearch = ({
  _id,
  onDirclick,
  searchResults,
  search,
  onSearchType
}) => (
  <div>
    <FormGroup>
      <Input
        className="search-bar typeahead form-control"
        type="search"
        id="exampleSearch"
        placeholder="Search..."
        onChange={onSearchType}
        searchResults={searchResults}
        value={search}
      />

      <Dropdown isOpen={search}>
        <DropdownMenu className="search-dropdown">
          <DropdownToggle style={{ visibility: "hidden" }} />
          {search !== "" &&
            searchResults.map(searchResult => {
              // transform a string to display in several spans
              const searchResultString = highlight(searchResult.name, search)
              return (
                <DropdownItem
                  onClick={() => onDirclick(searchResult._id)}
                  key={searchResult.value}
                  value={searchResult.value}
                >
                  <span>{searchResultString[0]}</span>
                  <span style={{ color: "red" }}>{search}</span>
                  <span>{searchResultString[1]}</span>
                </DropdownItem>
              )
            })}
        </DropdownMenu>
      </Dropdown>
    </FormGroup>
  </div>
)

export default NavbarTopSearch
