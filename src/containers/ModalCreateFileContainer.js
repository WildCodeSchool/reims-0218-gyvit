import React, { Component } from "react"
import { connect } from "react-redux"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap"

import { makeHideModalCreateFile } from "../actions/modalCreateFileAction"
import { makeAddAFileSuccess } from "../actions/filesActions"
import { uploadFile } from "../api/files/uploadFile"
import UploadFileFormContainer from "./UploadFileFormContainer"

const mapStateToProps = state => {
  return {
    destination: state.currentDir._id,
    modalCreateFile: state.modalCreateFile.visibilityCreateFile
  }
}

const mapDispatchToProps = dispatch => ({
  // function to store the new dir
  onSubmitCreateFile: response => dispatch(makeAddAFileSuccess(response)),
  // function for cancelling modal
  onHideModal: () => dispatch(makeHideModalCreateFile())
})

class ModalCreateFileContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "" }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.onCreateFile = this.onCreateFile.bind(this)
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onCreateFile() {
    uploadFile(this.state.name, this.props.destination)
      .then(response => this.props.onSubmitCreateFile(response))
      .then(() => this.props.onHideModal()) // close modal after creating a file
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modalCreateFile}>
          <ModalHeader toggle={() => this.props.onHideModal() /*cancel modal*/}>
            Add a file
          </ModalHeader>
          <ModalBody>
            <UploadFileFormContainer />
          </ModalBody>
          <ModalFooter />
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ModalCreateFileContainer
) // If you want to use mapDispatchToProps without a mapStateToProps just use null for the first argument.
