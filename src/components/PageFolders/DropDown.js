import React from "react"
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"

export default class Example extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle>
          <img
            style={{
              marginTop: "33px"
            }}
            src="Assets/icon_dots_more.png"
            alt="Button Dropdown"
          />
          {/* <i className="Assets/icon_dots_more.png" /> */}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem img="Assets/icon_shares.png">Share</DropdownItem>
          <DropdownItem tag="a" href="/sign-in">
            Create public access
          </DropdownItem>
          <DropdownItem icon="Assets/icon_shares.png">
            Create prive access Action
          </DropdownItem>
          <DropdownItem>
            <i className="Assets/icon_shares.png" />
            <span> Informatins</span>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <i className="Assets/icon_Share" />Rename
          </DropdownItem>
          <DropdownItem>Delete</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}
