import { connect } from "react-redux"
import React from "react"
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap"
import {
  makeDeleteAFolderSuccess,
  makeUpdateAFolderSuccess
} from "../../actions/foldersActions"
import { makeShowModalError } from "../../actions/errorsActions"
import { deleteDirectory } from "../../api/directorys/deleteDirectory"
import { updateDir } from "../../api/directorys/updateDir"

const mapDispatchToProps = dispatch => ({
  onDeleteDir: dirId => dispatch(makeDeleteAFolderSuccess(dirId)),
  onUpdateDir: response => dispatch(makeUpdateAFolderSuccess(response)),
  onError: message => dispatch(makeShowModalError(message))
})

class DropDown extends React.Component {
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
      <ButtonDropdown
        style={{ marginTop: "30px" }}
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle color="white">
          <img
            src="Assets/icon_dots_more.png"
            alt="Button Dropdown"
            aria-hidden="true"
          />
        </DropdownToggle>
        <DropdownMenu>
          <div>
            <a
              style={{
                color: "black"
              }}
              className="dropdown-item"
              href=""
            >
              <img
                style={{
                  marginRight: "6%"
                }}
                src="Assets/icon_share_dropdown.png"
                alt=""
                aria-hidden="true"
              />
              <span>Share</span>
            </a>
            <a
              style={{
                color: "black"
              }}
              className="dropdown-item"
              href=""
            >
              <img
                style={{
                  marginRight: "8%"
                }}
                src="Assets/icon_create_public_access.png"
                alt=""
                aria-hidden="true"
              />
              <span>Create public access</span>
            </a>
            <a
              style={{
                color: "black"
              }}
              className="dropdown-item"
              href=""
            >
              <img
                style={{
                  marginRight: "8%"
                }}
                src="Assets/icon_create_private_access.png"
                alt=""
                aria-hidden="true"
              />
              <span>Create private access</span>
            </a>
            <a
              style={{
                color: "black"
              }}
              className="dropdown-item"
              href=""
            >
              <img
                style={{
                  marginRight: "8%"
                }}
                src="Assets/icon_informations.png"
                alt=""
                aria-hidden="true"
              />
              <span>Informations</span>
            </a>
          </div>
          <DropdownItem divider />
          <div>
            <a
              style={{
                color: "black"
              }}
              className="dropdown-item"
              onClick={() =>
                console.log(`tu as cliqué sur ${this.props.dirId}`)
              }
            >
              <span>Rename</span>
            </a>
            <Button
              style={{
                color: "black"
              }}
              className="dropdown-item"
              onClick={() => {
                deleteDirectory(this.props.dirId, this.props.dirName)
                  .then(response => {
                    // if response isn't with _id, error is catched
                    return this.props.onDeleteDir(response._id)
                  })
                  // errors not wanted
                  .catch(response => this.props.onError(response.message))
              }}
            >
              <span>Delete</span>
            </Button>
          </div>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}
export default connect(null, mapDispatchToProps)(DropDown)
