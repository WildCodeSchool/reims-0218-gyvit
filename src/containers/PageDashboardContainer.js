import React from "react"
import { Container, Row, Col } from "reactstrap"

import { connect } from "react-redux"
import NavbarLeft from "../components/NavbarLeft/NavbarLeft"

import DashboardListCards from "../components/PageDashboard/DashboardListCards"
import NavbarTop from "../components/NavbarTop/NavbarTop"

const mapStateToProps = state => ({
  profile: state.profile,
  notif: state.notif
})

// const mapDispatchToProps = dispatch => ({
//   onRetrieveDirSuccess: response => dispatch(makeRetrieveDirSuccess(response))
// })

const PageDashboard = () => (
  <Container fluid>
    <Row>
      <Col>
        <NavbarLeft />
      </Col>
      <Col xs="10">
        <NavbarTop />
        <DashboardListCards />
      </Col>
    </Row>
  </Container>
)

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(PageDashboard)
