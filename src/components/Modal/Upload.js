import NavbarLeftLogo from "../NavbarLeft/NavbarLeftLogo"
import React from "react"
import PropTypes from "prop-types"
import {FormGroup, Nav, NavItem, Container, Row, Col, Button, Form, Label, Input, FormText  } from "reactstrap"

const Upload = () => (
  <div>
    <Container>
      <Row>
     
        <NavbarLeftLogo/>

         <Form>
        <FormGroup row>
       
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>Select</Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
          <Col sm={10}>
            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Text Area</Label>
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
            <Button>Submit</Button>
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
