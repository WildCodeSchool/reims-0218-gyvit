// TODO list of links to navbar

import React from "react"
import PropTypes from "prop-types"
import NavbarLeftItem from "./NavbarLeftItem"
import { Nav, NavItem, Container, Row } from "reactstrap"
import NavbarLeftLogo from "./NavbarLeftLogo"

const dataLinks = [
  {
    nameLink: "Home",
    icon: "/img/icon_home.png"
  },
  {
    nameLink: "Files",
    icon: "/img/icon_files.png"
  },
  {
    nameLink: "Shares",
    icon: "/img/icon_shares.png"
  },
  {
    nameLink: "Templates",
    icon: "/img/icon_templates.png"
  },
  {
    nameLink: "Requests",
    icon: "/img/icon_requests.png"
  },
  {
    nameLink: "Public links",
    icon: "/img/icon_shares.png"
  },
  {
    nameLink: "Contacts",
    icon: "/img/icon_contacts.png"
  },
  {
    nameLink: "Settings",
    icon: "/img/icon_settings.png"
  }
]

const NavbarLeft = () => (
  <div>
    <Container>
      <Row>
        <Nav
          vertical
          expand="md"
          style={{
            width: "220px",
            height: "1024px",
            backgroundColor: "#231b56",
            color: "white"
          }}
        >
          <NavbarLeftLogo />
          <NavItem className="text-center">
            {dataLinks.map((link, index) => (
              <NavbarLeftItem key={index} {...link} />
            ))}
          </NavItem>
        </Nav>
      </Row>
    </Container>
  </div>
)

NavbarLeft.propTypes = {
  dataLinks: PropTypes.array
}

export default NavbarLeft
