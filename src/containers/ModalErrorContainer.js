import React, { Component } from "react"
import { connect } from "react-redux"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

import {
  makeShowModalError,
  makeHideModalError
} from "../actions/errorsActions"

const mapStateToProps = state => {
  return {
    visibilityError: state.errors.visibilityError,
    message: state.errors.message
  }
}

const mapDispatchToProps = dispatch => ({
  onErrorToDisplay: response => {
    const visu =
      typeof response.message === undefined ? response.error : response.message
    console.log("visualisation response de l'erreur", visu)
    dispatch(
      // ternaire pour afficher la propriété error ou la propriété message suivant celui qui est définit
      makeShowModalError(visu)
    )
  },
  onErrorToHide: () => dispatch(makeHideModalError())
})

class ModalErrorContainer extends Component {
  constructor(props) {
    super(props)
    this.toggleErrorModal = this.toggleErrorModal.bind(this)
  }

  toggleErrorModal() {
    if (!this.props.visibilityError) {
      this.props.onErrorToDisplay(this.props.message)
    } else {
      this.props.onErrorToHide()
    }
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.visibilityError}
          toggleErrorModal={this.toggleErrorModal}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggleErrorModal}>Modal Error</ModalHeader>
          <ModalBody>{this.props.message}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleErrorModal}>
              Ok
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalErrorContainer) // If you want to use mapDispatchToProps without a mapStateToProps just use null for the first argument.
