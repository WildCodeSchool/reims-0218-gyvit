import { connect } from "react-redux"
import React from "react"
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Popover,
  PopoverHeader,
  PopoverBody
} from "reactstrap"
import {
  makeDeleteAFolderSuccess,
  makeUpdateAFolderSuccess,
  makeInformationsDir
} from "../actions/foldersActions"
import ModalUpdateDirContainer from "./ModalUpdateDirContainer"
import { makeShowModalUpdateDir } from "../actions/modalUpdateDirAction"
import { makeShowModalError } from "../actions/errorsActions"
import { deleteDirectory } from "../api/directorys/deleteDirectory"
import { convertDateFromJsonToFrench } from "../functions/dirs"

const mapDispatchToProps = dispatch => ({
  onDeleteDir: dirId => dispatch(makeDeleteAFolderSuccess(dirId)),
  onShowUpdateDir: (dirId, dirName) =>
    dispatch(makeShowModalUpdateDir(dirId, dirName)),
  onListInformationsDir: response => dispatch(makeInformationsDir(response)),
  onUpdateDir: response => dispatch(makeUpdateAFolderSuccess(response)),
  onError: message => dispatch(makeShowModalError(message))
})

const mapStateToProps = state => ({
  selectedDir: state.selectedDir
})

class DropDown extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
      popoverInformationsOpen: false
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  onToggleInformationsPopover() {
    this.setState({
      popoverInformationsOpen: !this.state.popoverInformationsOpen
    })
  }

  render() {
    const { _id, name, created, modified } = this.props.dir
    return (
      <ButtonDropdown
        style={{ marginTop: "15px" }}
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        direction="left"
      >
        <ModalUpdateDirContainer />
        <DropdownToggle
          color="link"
          onClick={() => {
            this.props.onListInformationsDir(this.props.dir)
          }}
        >
          <img
            src="Assets/icon_dots_more.svg"
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
            <div>
              <div>
                <Popover
                  placement="left-start"
                  isOpen={this.state.popoverInformationsOpen}
                  target="popoverInformations"
                  toggle={this.onToggleInformationsPopover}
                >
                  <PopoverHeader>Informations of {name}</PopoverHeader>
                  <PopoverBody>
                    Created: {convertDateFromJsonToFrench(created)}
                    Modified: {convertDateFromJsonToFrench(modified)}
                  </PopoverBody>
                </Popover>
              </div>
              <Button
                id="popoverInformations"
                style={{
                  color: "black"
                }}
                className="dropdown-item"
                onClick={() => this.onToggleInformationsPopover()}
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
              </Button>
            </div>
          </div>
          <DropdownItem divider />
          <div>
            <Button
              style={{
                color: "black"
              }}
              className="dropdown-item"
              onClick={() => {
                return this.props.onShowUpdateDir(_id, name)
              }}
            >
              <span>Renommer {name}</span>
            </Button>
            <Button
              style={{
                color: "black"
              }}
              className="dropdown-item"
              onClick={() => {
                deleteDirectory(_id, name)
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
export default connect(mapStateToProps, mapDispatchToProps)(DropDown)
