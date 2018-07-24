import React, { Component } from "react"
import { connect } from "react-redux"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

import { makeHideModalCreateFile } from "../actions/modalCreateFileAction"
import { makeAddAFileSuccess } from "../actions/filesActions"
import UploadFileFormContainer from "./UploadFileFormContainer"

const mapStateToProps = state => {
  return {
    destination: state.currentDir._id,
    modalCreateFile: state.modalCreateFile.visibilityCreateFile
  }
}

const mapDispatchToProps = dispatch => ({
  // function to store the new file
  onSubmitCreateFile: response => dispatch(makeAddAFileSuccess(response)),
  // function for cancelling modal
  onHideModal: () => dispatch(makeHideModalCreateFile())
})

class ModalCreateFileContainer extends Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modalCreateFile}>
          <ModalHeader toggle={() => this.props.onHideModal() /*cancel modal*/}>
            Ajout d'un fichier :
          </ModalHeader>
          <ModalBody>
            <UploadFileFormContainer />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalCreateFileContainer) // If you want to use mapDispatchToProps without a mapStateToProps just use null for the first argument.
