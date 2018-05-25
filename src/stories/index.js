import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { Button, Welcome } from "@storybook/react/demo"

// for having bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css"

import Content from "../components/Content"

import "bootstrap/dist/css/bootstrap.min.css"
import NavLink from "reactstrap"
import Listlink from "../components/ListLink"
import NavbarTop from "../components/NavbarTop"
import NavbarTopSearch from "../components/NavbarTopSearch"
import NavbarTopNotif from "../components/NavbarTopNotif"
import NavbarTopProfile from "../components/NavbarTopProfile"
import NavbarTopNotifBubble from "../components/NavbarTopNotifBubble"
import SignInButton from "../components/SignInButton"
import SignInEmail from "../components/SignInEmail"
import SignInGetStarted from "../components/SignInGetStarted"
import SignInTitle from "../components/SignInTitle"
import FoldersBarTop from "../components/FoldersBarTop"
import Link from "../components/Link"
import ListFile from "../components/ListFile"

const propsContentOfProfil = {
  lastname: "Duflot",
  firstname: "Romain",
  business: "Notoriety"
}

const propsWith0notif = {
  notifsCount: 0
}

const propsWith6notif = {
  notifsCount: 6
}

const propsWith16notif = {
  notifsCount: 16
}

const propsWith116notif = {
  notifsCount: 116
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
const name = "Romain"
storiesOf("Content", module).add("with array of actions", () => (
  <Content elements={listCardsInHome} name={name} />
))
storiesOf("Page Dashboard", module).add("NavbarTop", () => <NavbarTop />)

storiesOf("NavbarTop", module)
  .add("NavbarTopSearch", () => <NavbarTopSearch />)
  .add("NavbarTopNotif", () => <NavbarTopNotif {...propsWith116notif} />)
  .add("NavbarTopProfile", () => <NavbarTopProfile {...propsContentOfProfil} />)

storiesOf("NavbarTopNotif", module).add("NavbarTopNotif0", () => (
  <NavbarTopNotif {...propsWith0notif} />
))

storiesOf("NavbarTopNotif", module).add("NavbarTopNotif116", () => (
  <NavbarTopNotif {...propsWith116notif} />
))

storiesOf("NavbarTopNotifBubble", module).add(
  "NavbarTopNotifBubble pour 0 notif",
  () => <NavbarTopNotifBubble {...propsWith0notif} />
)

storiesOf("NavbarTopNotifBubble", module).add(
  "NavbarTopNotifBubble pour 6 notifs",
  () => <NavbarTopNotifBubble {...propsWith6notif} />
)

storiesOf("NavbarTopNotifBubble", module).add(
  "NavbarTopNotifBubble pour 16 notifs",
  () => <NavbarTopNotifBubble {...propsWith16notif} />
)

storiesOf("NavbarTopNotifBubble", module).add(
  "NavbarTopNotifBubble pour 116 notifs",
  () => <NavbarTopNotifBubble {...propsWith116notif} />
)

storiesOf("SignIn", module)
  .add("SignInEmail", () => <SignInEmail />)
  .add("SignInButton", () => <SignInButton />)
  .add("SignInGetStarted", () => <SignInGetStarted />)
  .add("SignInTitle", () => <SignInTitle />)
storiesOf("Page Folders", module).add("FoldersBarTop", () => <FoldersBarTop />)

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

storiesOf("ListFile", module).add("ListFile", () => <ListFile />)
