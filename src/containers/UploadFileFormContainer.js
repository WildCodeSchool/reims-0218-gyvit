import React, { Component } from "react"
import { connect } from "react-redux"
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap"

import { DateTime } from "luxon"
import ModalErrorContainer from "./ModalErrorContainer"
import { uploadFile } from "../api/files/uploadFile"
import { makeAddAFileSuccess } from "../actions/filesActions"
import { makeHideModalCreateFile } from "../actions/modalCreateFileAction"
import { makeShowModalError } from "../actions/errorsActions"
import { convertDateFromJsonToFrench } from "../functions/dirs"

const mapStateToProps = state => ({
  destination: state.currentDir._id
})

const mapDispatchToProps = dispatch => ({
  onFileUpload: response => dispatch(makeAddAFileSuccess(response)),
  onHideModal: () => dispatch(makeHideModalCreateFile()),
  onError: message => dispatch(makeShowModalError(message))
})

class UploadFileFormContainer extends Component {
  constructor(props) {
    super(props)
    const currentTime = DateTime.local()
      .setLocale("en-US")
      .toLocaleString(DateTime.DATETIME_FULL)

    this.state = {
      visibilityError: false,
      file: {
        _id: "file_odd9OMeNdsds2lE3ePeN02N9",
        object: "file",
        name: "Assurance responsabilité civile",
        size: "1000",
        ext: "php",
        type: "",
        remove: 0,
        created: `${currentTime}`,
        modified: `${currentTime}`,
        removed: null
      }
    }
    //INFO: right code for upload when API will return a file
    // this.onHandleFileUpload = this.onHandleFileUpload.bind(this)
  }

  // onHandleFileUpload() {
  //   const data = new FormData()
  //   data.append("file", this.fileInput.files[0])
  //   data.append("destination", this.props.destination)
  //   data.append("name", this.fileInput.files[0].name)
  //   //build data
  //   uploadFile(data)
  //     .then(response => this.props.onFileUpload(response))
  //     .catch(response => this.props.onError(response.message))
  //   this.props.onHideModal()
  // }

  render() {
    return (
      <Form>
        <ModalErrorContainer />
        <FormGroup>
          <Label for="fileInput">Fichier:</Label>
          <Input type="file" name="file" id="fileInput" />
        </FormGroup>

        <FormGroup row>
          <Button
            style={{
              backgroundColor: "#7a57d1",
              borderRadius: "100px",
              border: "solid 1px #7a57d1",
              color: "white",
              marginLeft: "2%"
            }}
            type="button"
            onClick={() => {
              this.props.onFileUpload(this.state.file)
              return this.props.onHideModal()
            }}
          >
            Envoyez
          </Button>
        </FormGroup>
      </Form>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadFileFormContainer)
