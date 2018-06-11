import React from "react"
import { Row, Col, Container } from "reactstrap"
import { connect } from "react-redux"
import SignInBarLeft from "./SignInBarLeft"
import SignInContent from "./SignInContent"

// const mapStateToProps = state => {
//   return {
//     connectUserSuccessAction: state.data.user
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     login: (email, password) => dispatch(userReducer(email, password))
//   }
// }

const PageSignIn = () => (
  <Container fluid>
    <Row>
      <Col md="4">
        <SignInBarLeft />
      </Col>
      <Col md="8">
        <SignInContent />
      </Col>
    </Row>
  </Container>
)

export default connect()(PageSignIn)
