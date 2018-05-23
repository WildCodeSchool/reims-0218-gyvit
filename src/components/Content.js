import React from "react"
import DashboardCard from "./DashboardCard"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "reactstrap"

const Content = ({ ...props }) => (
  <Container>
    <Row>
      <Col xs="4">
        <DashboardCard arrayCard={props.elements[0]} />
      </Col>
      <Col xs="4">
        <DashboardCard arrayCard={props.elements[0]} />
      </Col>
      <Col xs="4">
        <DashboardCard arrayCard={props.elements[0]} />
      </Col>
    </Row>
  </Container>
)
export default Content
