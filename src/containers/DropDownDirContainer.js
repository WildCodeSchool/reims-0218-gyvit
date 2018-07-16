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
  PopoverBody,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap"
import { Link } from "react-router-dom"
import {
  makeDeleteAFolderSuccess,
  makeUpdateAFolderSuccess,
  makeInformationsDir
} from "../actions/foldersActions"
import ModalUpdateDirContainer from "./ModalUpdateDirContainer"
import ModalErrorContainer from "./ModalErrorContainer"
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
    this.onToggleInformationsPopover = this.onToggleInformationsPopover.bind(
      this
    )
    this.state = {
      dropdownOpen: false,
      popoverInformationsOpen: false,
      visibilityError: false
    }
  }

  toggle() {
    this.setState((prevState, props) => ({
      dropdownOpen: !prevState.dropdownOpen,
      popoverInformationsOpen: false
    }))
  }

  onToggleInformationsPopover() {
    this.setState((prevState, props) => ({
      popoverInformationsOpen: !prevState.popoverInformationsOpen
    }))
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
        <ModalErrorContainer />
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
                  marginRight: "8%"
                }}
                src="Assets/icon_share_dropdown.png"
                alt=""
                aria-hidden="true"
              />
              <span>
                <Link
                  to="/inConstruction"
                  style={{
                    color: "black"
                  }}
                >
                  Share
                </Link>
              </span>
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
              <span>
                <Link
                  to="/inConstruction"
                  style={{
                    color: "black"
                  }}
                >
                  Create public access
                </Link>
              </span>
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
              <span>
                <Link
                  to="/inConstruction"
                  style={{
                    color: "black"
                  }}
                >
                  Create private access
                </Link>
              </span>
            </a>
            <div>
              <div>
                <Popover
                  placement="left"
                  isOpen={
                    this.state.popoverInformationsOpen &&
                    this.state.dropdownOpen
                  }
                  target={"popoverInformations" + _id}
                  toggle={this.onToggleInformationsPopover}
                >
                  <PopoverHeader style={{ textAlign: "center" }}>
                    <span>Informations</span>
                  </PopoverHeader>
                  <PopoverBody style={{ textAlign: "center" }}>
                    <Card>
                      <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardSubtitle />
                        <CardText>
                          created: {convertDateFromJsonToFrench(created)}
                        </CardText>
                        <CardText>
                          modified: {convertDateFromJsonToFrench(modified)}
                        </CardText>
                      </CardBody>
                    </Card>
                  </PopoverBody>
                </Popover>
              </div>
              <Button
                id={"popoverInformations" + _id}
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
                  .catch(response => this.props.onError(response))
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
