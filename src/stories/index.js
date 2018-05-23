import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import { storiesOf } from "@storybook/react"

import NavbarTop from "../components/NavbarTop"
import NavbarTopSearch from "../components/NavbarTopSearch"
import NavbarTopNotif from "../components/NavbarTopNotif"
import NavbarTopProfile from "../components/NavbarTopProfile"
import NavbarTopNotifBubble from "../components/NavbarTopNotifBubble"

const NavbarTopNotifBubble0 = {
  numberNotifs: 0
}

const NavbarTopNotifBubble6 = {
  numberNotifs: 6
}

const NavbarTopNotifBubble16 = {
  numberNotifs: 16
}

const NavbarTopNotifBubble116 = {
  numberNotifs: 116
}

storiesOf("Page Dashboard", module).add("NavbarTop", () => <NavbarTop />)

storiesOf("NavbarTop", module)
  .add("NavbarTopSearch", () => <NavbarTopSearch />)
  .add("NavbarTopNotif", () => <NavbarTopNotif />)
  .add("NavbarTopProfile", () => <NavbarTopProfile />)

storiesOf("NavbarTopNotif", module).add("NavbarTopNotif0", () => (
  <NavbarTopNotif displayNumberNotifs={NavbarTopNotifBubble0.numberNotifs} />
))

storiesOf("NavbarTopNotif", module).add("NavbarTopNotif116", () => (
  <NavbarTopNotif displayNumberNotifs={NavbarTopNotifBubble116.numberNotifs} />
))

storiesOf("NavbarTopNotifBubble", module).add(
  "NavbarTopNotifBubble pour 0 notif",
  () => (
    <NavbarTopNotifBubble numberNotifs={NavbarTopNotifBubble0.numberNotifs} />
  )
)

storiesOf("NavbarTopNotifBubble", module).add(
  "NavbarTopNotifBubble pour 6 notifs",
  () => (
    <NavbarTopNotifBubble numberNotifs={NavbarTopNotifBubble6.numberNotifs} />
  )
)

storiesOf("NavbarTopNotifBubble", module).add(
  "NavbarTopNotifBubble pour 16 notifs",
  () => (
    <NavbarTopNotifBubble numberNotifs={NavbarTopNotifBubble16.numberNotifs} />
  )
)

storiesOf("NavbarTopNotifBubble", module).add(
  "NavbarTopNotifBubble pour 116 notifs",
  () => (
    <NavbarTopNotifBubble numberNotifs={NavbarTopNotifBubble116.numberNotifs} />
  )
)
