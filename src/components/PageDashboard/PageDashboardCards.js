import React from "react"
import { Row, Col, Container } from "reactstrap"
import ListLink from "./ListLink"
import DashboardCard from "./DashboardCard"
import NavbarTop from "./NavbarTop"
import Content from "./DashboardCard"

const listLinksProps = {
  dataLinks: [
    {
      nameLink: "Home",
      icon: process.env.PUBLIC_URL + "/img/icon_home.png"
    },
    {
      nameLink: "Files",
      icon: process.env.PUBLIC_URL + "/img/icon_files.png"
    },
    {
      nameLink: "Shares",
      icon: process.env.PUBLIC_URL + "/img/icon_shares.png"
    },
    {
      nameLink: "Templates",
      icon: process.env.PUBLIC_URL + "/img/icon_templates.png"
    },
    {
      nameLink: "Requests",
      icon: process.env.PUBLIC_URL + "/img/icon_requests.png"
    },
    {
      nameLink: "Public links",
      icon: process.env.PUBLIC_URL + "/img/icon_shares.png"
    },
    {
      nameLink: "Contacts",
      icon: process.env.PUBLIC_URL + "/img/icon_contacts.png"
    },
    {
      nameLink: "Settings",
      icon: process.env.PUBLIC_URL + "/img/icon_settings.png"
    }
  ]
}

const PageDashboardCards = () => (
  <Container fluid>
    <Row>
      <Col xs="3">
        <ListLink {...listLinksProps} />
      </Col>
      <Col xs="9">
        <NavbarTop />
        <DashboardCard />
      </Col>
    </Row>
  </Container>
)

export default PageDashboardCards
