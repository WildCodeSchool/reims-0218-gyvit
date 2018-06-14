import React from "react"
import PropTypes from "prop-types"
import {FormGroup, Nav, NavItem, Container, Row, Col, Button, Form, Label, Input, FormText  } from "reactstrap"

const Upload = () => (
  <div>
    
    <Container>
      <Row>
     

      <Form>
        <h1>Upload files</h1>      
        <FormGroup row>
          <Label for="exampleText" md={8}>Comments :</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>File</Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              Please select a file to upload
            </FormText>
          </Col>
        </FormGroup>  
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Upload this file</Button>
          </Col>
        </FormGroup>
      </Form>
      </Row>
    </Container>
  </div>
)

Upload.propTypes = {
  dataLinks: PropTypes.array
}

export default Upload
