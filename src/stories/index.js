import React from "react"
import { storiesOf } from "@storybook/react"
import { linkTo } from "@storybook/addon-links"
import { Welcome } from "@storybook/react/demo"
import "bootstrap/dist/css/bootstrap.min.css"

import Link from "../components/Link"
import Listlink from "../components/ListLink"

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
))

const listLinksProps = {
  dataLinks: [
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
}

const homeLinkProps = {
  nameLink: "Home",
  icon: process.env.PUBLIC_URL + "/img/house_38533.ico"
}

storiesOf("Page Dashboard")
  .add("Listlink", () => <Listlink {...listLinksProps} />)
  .add("Link", () => <Link {...homeLinkProps} />)
