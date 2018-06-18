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
  onErrorToDisplay: () => dispatch(makeShowModalError()),
  onErrorToHide: () => dispatch(makeHideModalError())
})

class ModalErrorContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibilityError: false
    }

    this.toggleErrorModal = this.toggleErrorModal.bind(this)
  }

  toggleErrorModal() {
    this.setState({
      visibilityError: !this.state.visibilityError
    })
  }

  render() {
    return (
      <div>
        {`test modal: this.state.visibilityError ${this.state.visibilityError}`}
        <Modal
          isOpen={this.props.visibilityError}
          toggleErrorModal={this.toggleErrorModal}
          className={this.props.className}
        >
          <ModalHeader toggleErrorModal={this.toggleErrorModal}>
            Modal Error
          </ModalHeader>
          <ModalBody>{this.props.message}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleErrorModal}>
              Ok
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleErrorModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalErrorContainer) // If you want to use mapDispatchToProps without a mapStateToProps just use null for the first argument.
