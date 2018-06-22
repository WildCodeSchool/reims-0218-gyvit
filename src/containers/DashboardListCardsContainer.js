import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import { connect } from "react-redux"
import DashboardCard from "../components/PageDashboard/DashboardCard"

const mapStateToProps = state => ({
  elements: state.elements,
  name: state.name
})

class DashboardListCardsContainer extends Component {
  render() {
    return (
      <Container>
        <Row className="App">
          <Col>
            <p
              style={{
                fontSize: "24px",
                height: "33px",
                textAlign: "center"
              }}
            >
              Welcome to Gyvit, {this.state.name}.
            </p>
          </Col>
          <Col sm="12" md={{ size: 4, offset: 3 }}>
            <p
              style={{
                fontSize: "18px",
                height: "24px",
                textAlign: "center",
                color: "#000000",
                opacity: 0.45,
                marginBottom: "60px"
              }}
            >
              What would you like to do ?
            </p>
          </Col>
        </Row>
        <Row>
          {this.props.elements.map(element => (
            <DashboardCard key={element.id} {...element} />
          ))}
          elements={this.props.elements}
        </Row>
      </Container>
    )
  }
}
export default connect(mapStateToProps, null)(DashboardListCardsContainer)
