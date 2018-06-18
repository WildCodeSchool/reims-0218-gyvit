import React, { Component } from "react"
import { connect } from "react-redux"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

import {
  makeShowModalError,
  makeHideModalError
} from "../actions/errorsActions"

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

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      visibilityError: !this.state.visibilityError
    })
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.visibilityError}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>{this.props.message}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(ModalErrorContainer) // If you want to use mapDispatchToProps without a mapStateToProps just use null for the first argument.
