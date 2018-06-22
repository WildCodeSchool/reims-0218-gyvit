import React, { Component } from "react"
import { connect } from "react-redux"
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap"

import { uploadFile } from "../api/files/uploadFile"
import { makeAddAFileSuccess } from "../actions/filesActions"

const mapStateToProps = state => ({
  destination: state.currentDir._id
})

const mapDispatchToProps = dispatch => ({
  onFileUpload: response => dispatch(makeAddAFileSuccess(response))
})

class UploadFileFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
    this.onHandleName = this.onHandleName.bind(this)
    this.onHandleFileUpload = this.onHandleFileUpload.bind(this)
  }

  onHandleName(event) {
    this.setState({ name: event.target.value }) //dynamique value email or password
  }

  onHandleFileUpload() {
    const data = new FormData()
    data.append("file", this.fileInput.files[0])
    data.append("name", this.state.name)
    data.append("destination", this.props.destination)
    //build data
    uploadFile(data).then(response => this.props.onFileUpload(response))
  }

  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="nameFile" sm={2}>
            Nom du fichier
          </Label>
          <Col sm={4}>
            <Input
              type="text"
              value={this.state.name}
              name="name"
              id="nameFile"
              onChange={this.onHandleName}
              placeholder="Votre nom de fichier"
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="inputFile" sm={2}>
            File
          </Label>
          <Col sm={10}>
            <input
              type="file"
              name="file"
              id="inputFile"
              ref={input => {
                this.fileInput = input
              }}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button type="button" onClick={this.onHandleFileUpload}>
              Submit
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  UploadFileFormContainer
)
