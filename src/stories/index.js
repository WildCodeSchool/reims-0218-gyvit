import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { Button, Welcome } from "@storybook/react/demo"

// for having bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css"

import Listlink from "../components/ListLink"
import NavbarTop from "../components/NavbarTop"
import NavbarTopSearch from "../components/NavbarTopSearch"
import NavbarTopNotif from "../components/NavbarTopNotif"
import NavbarTopProfile from "../components/NavbarTopProfile"
import NavbarTopNotifBubble from "../components/NavbarTopNotifBubble"
import Content from "../components/Content"
import DashboardCard from "../components/DashboardCard"
import { Nav, NavItem, NavLink } from "reactstrap"

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
))

storiesOf("Page home", module).add("navbar", () => (
  <div>
    <Nav vertical>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
    </Nav>
    <hr />
  </div>
))

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))

const cardInHome = {
  id: 0,
  image: "",
  titre: "Documents requests",
  bio:
    "Take the first step to launching your store. Add physical items, digital downloads you can dream up",
  buttonText: "Create first request",
  link: "lien0"
}

const listCardsInHome = [
  {
    id: 0,
    image: "",
    titre: "Documents requests",
    bio:
      "Take the first step to launching your store. Add physical items, digital downloads you can dream up",
    buttonText: "Create first request",
    link: "lien0"
  },
  {
    id: 1,
    image: "",
    titre: "Share documents",
    bio:
      "Take the first step to launching your store. Add physical items, digital downloads you can dream up",
    buttonText: "Share documents",
    link: "lien1"
  },
  {
    id: 2,
    image: "",
    titre: "Store files",
    bio:
      "Take the first step to launching your store. Add physical items, digital downloads you can dream up",
    buttonText: "Upload documents",
    link: "lien2"
  }
]

const name = "Kevin"

storiesOf("Content", module).add("with array of actions", () => (
  <Content elements={listCardsInHome} name={name} />
))
storiesOf("DashboardCard", module).add("with single object for a card", () => (
  <DashboardCard contenu={cardInHome} key="0" />
))
storiesOf("Page Dashboard", module).add("NavbarTop", () => <NavbarTop />)

storiesOf("NavbarTop", module)
  .add("NavbarTopSearch", () => <NavbarTopSearch />)
  .add("NavbarTopNotif", () => <NavbarTopNotif />)
  .add("NavbarTopProfile", () => <NavbarTopProfile />)

storiesOf("NavbarTopNotif", module).add("NavbarTopNotifBubble", () => (
  <NavbarTopNotifBubble />
))
storiesOf("Page Dashboard").add("Listlink", () => <Listlink />)
