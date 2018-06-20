import React from "react"
import { Row, Col, Container } from "reactstrap"
import NavbarTop from "../NavbarTop/NavbarTop"
import NavbarLeft from "../NavbarLeft/NavbarLeft"
import DashboardListCards from "./DashboardListCards"

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
        <NavbarLeft {...listLinksProps} />
      </Col>
      <Col xs="9">
        <NavbarTop />
        <DashboardListCards />
      </Col>
    </Row>
  </Container>
)

export default PageDashboardCards
