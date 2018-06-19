import React, {Components}from "react"
import { Container, Row, Col } from "reactstrap"
import { connect } from "react-redux"

import DashboardCard from "./DashboardCard"

const mapStateToProps = state => ({
  elements: state.elements,
  name: state.name
})

class DashboardListCardsContainer extends Component {
render(){<Container>
  <Row className="App">
    <Col md="12" sm="4">
      <p
        style={{
          fontSize: "24px",
          height: "33px",
          marginTop: "120px",
          textAlign: "center"
        }}
      >
        Welcome to Gyvit, {name}.
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
    {elements.map(element => {      
       return <DashboardCard key={element.id} {...element} />
    })}
  </Row>
</Container>
  return (

  )
}





const DashboardListCards = ({ elements, name }) => (
  
)


export default connect(
  mapStateToProps
)(DashboardListCards)


