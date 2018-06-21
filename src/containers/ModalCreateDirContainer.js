import React, { Component } from "react"
import { connect } from "react-redux"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

import { makeHideModalCreateDir } from "../actions/modalCreateDirAction"

const mapStateToProps = state => {
  return {
    visibilityModalCreateDir: state.visibilityModalCreateDir
  }
}

const mapDispatchToProps = dispatch => ({
  onModalCreateDirToHide: () => dispatch(makeHideModalCreateDir())
})

class ModalCreateDirContainer extends Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.visibilityModalCreateDir}
          className={this.props.className}
        >
          <ModalHeader toggle={() => this.props.onModalCreateDirToHide()}>
            Modal Error
          </ModalHeader>
          <ModalBody>Ici s'affichera le formulaire de création</ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.props.onModalCreateDirToHide()}
            >
              Ok
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ModalCreateDirContainer
) // If you want to use mapDispatchToProps without a mapStateToProps just use null for the first argument.
