import React, { Component } from "react"
import { connect } from "react-redux"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

import { makeHideModalError } from "../actions/errorsActions"

const mapStateToProps = state => {
  return {
    visibilityError: state.error.visibilityError,
    message: state.error.message,
    error: state.error.error
  }
}

const mapDispatchToProps = dispatch => ({
  onErrorToHide: () => dispatch(makeHideModalError())
})

class ModalErrorContainer extends Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.visibilityError}
          className={this.props.className}
        >
          <ModalHeader toggle={() => this.props.onErrorToHide()}>
            Dommage, une erreur:
          </ModalHeader>
          <ModalBody>
            {// manage undesired message and desired error
            this.props.message ? this.props.message : this.props.error}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.props.onErrorToHide()}>
              Ok
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalErrorContainer) // If you want to use mapDispatchToProps without a mapStateToProps just use null for the first argument.
