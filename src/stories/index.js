import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import { storiesOf } from "@storybook/react"

import NavbarTop from "../components/NavbarTop"
import NavbarTopSearch from "../components/NavbarTopSearch"
import NavbarTopNotif from "../components/NavbarTopNotif"
import NavbarTopProfile from "../components/NavbarTopProfile"
import NavbarTopNotifBubble from "../components/NavbarTopNotifBubble"

const ProfileName = {
  name: "Pierre",
  imgSrc: "http://via.placeholder.com/64x64",
  business: "Notoriety"
}

storiesOf("Page Dashboard", module).add("NavbarTop", () => <NavbarTop />)

storiesOf("NavbarTop", module)
  .add("NavbarTopSearch", () => <NavbarTopSearch />)
  .add("NavbarTopNotif", () => <NavbarTopNotif />)
  .add("NavbarTopProfile", () => (
    <NavbarTopProfile
      name={ProfileName.name}
      imgSrc={ProfileName.imgSrc}
      business={ProfileName.business}
    />
  ))

storiesOf("NavbarTopNotif", module).add("NavbarTopNotifBubble", () => (
  <NavbarTopNotifBubble />
))
