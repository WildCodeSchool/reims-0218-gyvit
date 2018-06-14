import React from "react"
import {Container, Row,  Button, Form,  Input, Modal, ModalHeader, ModalBody } from "reactstrap"


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
                <Input type="text" name="name" id="text" placeholder="Directory's name" />
                <Button outline color="primary">Create new directory</Button>{' '}
                <Button outline color="secondary">Cancel</Button>{' '}
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
// const CreateDirectory = () => (
//   <div>
    
//     <Container>
//       <Row>
     

//       <Form>
//         <h1>New directory</h1> <br/>  
//         <Input type="email" name="name" id="IdEmail" placeholder="Directory's name" />
//         <Button outline color="primary">Create new directory</Button>{' '}
//         <Button outline color="secondary">Cancel</Button>{' '}
       
//       </Form>
//       </Row>
//     </Container>
//   </div>
// )

// CreateDirectory.propTypes = {
//   dataLinks: PropTypes.array
// }

// export default CreateDirectory
