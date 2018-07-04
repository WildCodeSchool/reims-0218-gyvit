import React, { Component } from "react"
import { connect } from "react-redux"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

import { makeHideModalInformationsDir } from "../actions/modalInformationsDirAction"
import { makeRetrieveDirSuccess } from "../actions/foldersActions"
import { retrieveDir } from "../api/directorys/retrieveDirectorys"

const mapStateToProps = state => {
  return {
    name: state.modalInformationsDir.name,
    id: state.modalInformationsDir.dir,
    destination: state.currentDir._id,
    modalInformationsDir: state.modalInformationsDir.visibilityInformationsDir
  }
}

const mapDispatchToProps = dispatch => ({
  onHideModal: () => dispatch(makeHideModalInformationsDir())
})

class ModalInformationsDirContainer extends Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modalInformationsDir}>
          <ModalHeader toggle={() => this.props.onHideModal()}>
            Informations : {this.props.name}
          </ModalHeader>
          <ModalBody />
          <ModalFooter />
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ModalInformationsDirContainer
)
