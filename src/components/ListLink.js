// TODO list of links to navbar

import React from "react"
import Link from "./Link"
import { Nav, NavItem } from "reactstrap"

const dataLinks = [
  {
    nameLink: "Home",
    icon: process.env.PUBLIC_URL + "/img/house_38533.ico"
  },
  {
    nameLink: "Files",
    icon: process.env.PUBLIC_URL + "/img/files.ico"
  },
  {
    nameLink: "Shares",
    icon: process.env.PUBLIC_URL + "/img/share.ico"
  },
  {
    nameLink: "Templates",
    icon: process.env.PUBLIC_URL + "/img/templates.ico"
  },
  {
    nameLink: "Requests",
    icon: process.env.PUBLIC_URL + "/img/request.ico"
  },
  {
    nameLink: "Public links",
    icon: process.env.PUBLIC_URL + "/img/links.ico"
  },
  {
    nameLink: "Contacts",
    icon: process.env.PUBLIC_URL + "/img/contact.ico"
  },
  {
    nameLink: "Settings",
    icon: process.env.PUBLIC_URL + "/img/settings.ico"
  }
]

const ListLink = () => (
  <Nav vertical>
    <NavItem>
      {dataLinks.map((link, index) => <Link key={index} {...link} />)}
    </NavItem>
  </Nav>
)

export default ListLink
