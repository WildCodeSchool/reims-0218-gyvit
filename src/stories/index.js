import React from "react"
import { storiesOf } from "@storybook/react"

import "bootstrap/dist/css/bootstrap.min.css"

import Listlink from "../components/ListLink"
import NavbarTop from "../components/NavbarTop"
import NavbarTopSearch from "../components/NavbarTopSearch"
import NavbarTopNotif from "../components/NavbarTopNotif"
import NavbarTopProfile from "../components/NavbarTopProfile"
import NavbarTopNotifBubble from "../components/NavbarTopNotifBubble"

<<<<<<< HEAD
const Bubble0 = {
  numberNotifs: 0
}

const Bubble6 = {
  numberNotifs: 6
}

const Bubble16 = {
  numberNotifs: 16
}

const Bubble116 = {
  numberNotifs: 116
}
=======
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
>>>>>>> 92f365aab31af8206f5766f1a7d381bbf63c2412

storiesOf("Page Dashboard", module).add("NavbarTop", () => <NavbarTop />)

storiesOf("NavbarTop", module)
  .add("NavbarTopSearch", () => <NavbarTopSearch />)
  .add("NavbarTopNotif", () => <NavbarTopNotif />)
  .add("NavbarTopProfile", () => <NavbarTopProfile />)

storiesOf("NavbarTopNotif", module).add("NavbarTopNotif0", () => (
  <NavbarTopNotif displayNumberNotifs={Bubble0.numberNotifs} />
))

storiesOf("NavbarTopNotif", module).add("NavbarTopNotif116", () => (
  <NavbarTopNotif displayNumberNotifs={Bubble116.numberNotifs} />
))
<<<<<<< HEAD

storiesOf("NavbarTopNotifBubble", module).add(
  "NavbarTopNotifBubble pour 0 notif",
  () => <NavbarTopNotifBubble numberNotifs={Bubble0.numberNotifs} />
)

storiesOf("NavbarTopNotifBubble", module).add(
  "NavbarTopNotifBubble pour 6 notifs",
  () => <NavbarTopNotifBubble numberNotifs={Bubble6.numberNotifs} />
)

storiesOf("NavbarTopNotifBubble", module).add(
  "NavbarTopNotifBubble pour 16 notifs",
  () => <NavbarTopNotifBubble numberNotifs={Bubble16.numberNotifs} />
)

storiesOf("NavbarTopNotifBubble", module).add(
  "NavbarTopNotifBubble pour 116 notifs",
  () => <NavbarTopNotifBubble numberNotifs={Bubble116.numberNotifs} />
)
=======
storiesOf("Page Dashboard").add("Listlink", () => <Listlink />)
>>>>>>> 92f365aab31af8206f5766f1a7d381bbf63c2412
