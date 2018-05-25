import React from "react"
import { storiesOf } from "@storybook/react"

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

storiesOf("Page Dashboard", module).add("NavbarTop", () => <NavbarTop />)

storiesOf("NavbarTop", module)
  .add("NavbarTopSearch", () => <NavbarTopSearch />)
  .add("NavbarTopNotif", () => <NavbarTopNotif />)
  .add("NavbarTopProfile", () => <NavbarTopProfile />)

storiesOf("NavbarTopNotif", module).add("NavbarTopNotifBubble", () => (
  <NavbarTopNotifBubble />
))
storiesOf("Page Dashboard").add("Listlink", () => <Listlink />)

storiesOf("SignIn", module)
  .add("SignInEmail", () => <SignInEmail />)
  .add("SignInButton", () => <SignInButton />)
  .add("SignInGetStarted", () => <SignInGetStarted />)
  .add("SignInTitle", () => <SignInTitle />)
