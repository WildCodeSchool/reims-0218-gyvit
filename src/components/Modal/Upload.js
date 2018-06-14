import React from "react"
import {FormGroup,  Container, Row, Col, Button, Form, Label, Input, FormText, Modal, ModalHeader, ModalBody  } from "reactstrap"

class ModalCreateDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Create a new directory</ModalHeader>
          <ModalBody>
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
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default ModalCreateDirectory;



// const Upload = () => (
//   <div>
    
//     <Container>
//       <Row>
     

//       <Form>
//         <h1>Upload files</h1>      
//         <FormGroup row>
//           <Label for="exampleText" md={8}>Comments :</Label>
//           <Col sm={10}>
//             <Input type="textarea" name="text" id="exampleText" />
//           </Col>
//         </FormGroup>
//         <FormGroup row>
//           <Label for="exampleFile" sm={2}>File</Label>
//           <Col sm={10}>
//             <Input type="file" name="file" id="exampleFile" />
//             <FormText color="muted">
//               Please select a file to upload
//             </FormText>
//           </Col>
//         </FormGroup>  
//         <FormGroup check row>
//           <Col sm={{ size: 10, offset: 2 }}>
//             <Button>Upload this file</Button>
//           </Col>
//         </FormGroup>
//       </Form>
//       </Row>
//     </Container>
//   </div>
// )

// Upload.propTypes = {
//   dataLinks: PropTypes.array
// }

// export default Upload
