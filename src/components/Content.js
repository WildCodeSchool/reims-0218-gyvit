import React from "react"
import DashboardCard from "./DashboardCard"
import { Container } from "reactstrap"

const Content = ({ ...toto }) => (
  <Container>
    <DashboardCard arrayCard={toto[0]} />
    <DashboardCard arrayCard={toto[1]} />
    <DashboardCard arrayCard={toto[2]} />
  </Container>
)
export default Content
