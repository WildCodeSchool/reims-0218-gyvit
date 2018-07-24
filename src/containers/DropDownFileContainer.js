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
import {
  makeDeleteAFileSuccess,
  makeUpdateAFileSuccess,
  makeInformationsFile
} from "../actions/filesActions"
import ModalUpdateFileContainer from "./ModalUpdateFileContainer"
import { makeShowModalUpdateFile } from "../actions/modalUpdateFileAction"
import { makeShowModalError } from "../actions/errorsActions"
import { deleteFile } from "../api/files/deleteFile"
import { convertDateFromJsonToFrench } from "../functions/dirs"

const mapDispatchToProps = dispatch => ({
  onDeleteFile: fileId => dispatch(makeDeleteAFileSuccess(fileId)),
  onShowUpdateFile: (fileId, fileName) =>
    dispatch(makeShowModalUpdateFile(fileId, fileName)),
  onListInformationsFile: response => dispatch(makeInformationsFile(response)),
  onUpdateFile: response => dispatch(makeUpdateAFileSuccess(response)),
  onError: message => dispatch(makeShowModalError(message))
})

const mapStateToProps = state => ({
  selectedFile: state.selectedFile
})

class DropDownFileContainer extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.onToggleInformationsPopover = this.onToggleInformationsPopover.bind(
      this
    )
    this.state = {
      dropdownOpen: false,
      popoverInformationsOpen: false
    }
  }

  toggle() {
    this.setState((prevState, props) => ({
      dropdownOpen: !prevState.dropdownOpen,
      popoverInformationsOpen: false
    }))
  }

  onToggleInformationsPopover() {
    this.setState({
      popoverInformationsOpen: !this.state.popoverInformationsOpen
    })
  }

  render() {
    const { _id, name, created, modified } = this.props.file
    return (
      <ButtonDropdown
        style={{ marginTop: "15px" }}
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        direction="left"
      >
        <ModalUpdateFileContainer />
        <DropdownToggle
          color="link"
          onClick={() => {
            this.props.onListInformationsFile(this.props.file)
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
              <span>Partager </span>
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
              <span>Créer un accès public</span>
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
              <span>Créer un accès privé</span>
            </a>
            <div>
              <div>
                <Popover
                  placement="left-start"
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
                          créé le: {convertDateFromJsonToFrench(created)}
                        </CardText>
                        <CardText>
                          modifié le: {convertDateFromJsonToFrench(modified)}
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
                return this.props.onShowUpdateFile(_id, name)
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
                deleteFile(_id, name)
                  .then(response => {
                    // if response isn't with _id, error is catched
                    return this.props.onDeleteFile(_id)
                  })
                  // errors not wanted
                  .catch(response => this.props.onError(response))
              }}
            >
              <span>Supprimer</span>
            </Button>
          </div>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(
  DropDownFileContainer
)
