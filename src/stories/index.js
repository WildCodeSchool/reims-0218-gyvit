import React from "react"

import { storiesOf } from "@storybook/react"

// for having bootstrap styles
import "bootstrap/dist/css/bootstrap.min.css"

import Content from "../components/Content"
import DashboardCard from "../components/DashboardCard"
import Link from "../components/Link"
import Listlink from "../components/ListLink"
import NavbarTop from "../components/NavbarTop"
import NavbarTopSearch from "../components/NavbarTopSearch"
import NavbarTopNotif from "../components/NavbarTopNotif"
import NavbarTopProfile from "../components/NavbarTopProfile"
import NavbarTopNotifBubble from "../components/NavbarTopNotifBubble"
import FoldersBarTop from "../components/FoldersBarTop"
import GetStartedSignInEmail from "../components/GetStartedSignInEmail"
import GetStartedSignInTitle from "../components/GetStartedSignInTitle"
import GetStartedSignInButton from "../components/GetStartedSignInButton"
import GetStartedSignInLinkHaveAnAccount from "../components/GetStartedSignInLinkHaveAnAccount"
import PageGetStartedForm from "../components/PageGetStartedForm"
import PageGetStarted from "../components/PageGetStarted"

import PageSignIn from "../components/PageSignIn"
import SignInBarLeft from "../components/SignInBarLeft"
import SignInButton from "../components/SignInButton"
import SignInContent from "../components/SignInContent"
import SignInEmail from "../components/SignInEmail"
import SignInTitle from "../components/SignInTitle"
import SignInGetStarted from "../components/SignInGetStarted"
import ForgotPasswordTitle from "../components/ForgotPasswordTitle"
import ForgotPasswordEmail from "../components/ForgotPasswordEmail"
import ForgotPasswordButton from "../components/ForgotPasswordButton"
import ForgotPasswordContent from "../components/ForgotPasswordContent"
import ForgotPasswordBackToSignIn from "../components/ForgotPasswordBackToSignIn"
import PageForgotPassword from "../components/PageForgotPassword"
import ForgotPasswordGetStarted from "../components/ForgotPasswordGetStarted"

storiesOf("Page Dashboard", module)
  .add("NavbarTop", () => <NavbarTop {...props} />)
  .add("NavbarLeft", () => <Listlink {...listLinksProps} />)
  .add("DashboardContent", () => (
    <Content elements={listCardsInHome} name={name} />
  ))

storiesOf("NavbarLeft", module)
  .add("NavbarListLink", () => <Listlink {...listLinksProps} />)
  .add("NavbarLink", () => <Link {...homeLinkProps} />)

const props = {
  notif: {
    notifsCount: 6
  },
  profile: {
    lastname: "Duflot",
    firstname: "Romain",
    business: "Notoriety"
  }
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

const cardInHome = {
  id: 0,
  image: "",
  titre: "Documents requests",
  bio:
    "Take the first step to launching your store. Add physical items, digital downloads you can dream up.",
  buttonText: "Create first request",
  link: "lien0"
}

const listCardsInHome = [
  {
    id: 0,
    image: "",
    titre: "Documents requests",
    bio:
      "Take the first step to launching your store. Add physical items, digital downloads you can dream up.",
    buttonText: "Create first request",
    link: "lien0"
  },
  {
    id: 1,
    image: "",
    titre: "Share documents",
    bio:
      "Take the first step to launching your store. Add physical items, digital downloads you can dream up.",
    buttonText: "Share documents",
    link: "lien1"
  },
  {
    id: 2,
    image: "",
    titre: "Store files",
    bio:
      "Take the first step to launching your store. Add physical items, digital downloads you can dream up.",
    buttonText: "Upload documents",
    link: "lien2"
  }
]

const name = "Kevin"

storiesOf("NavbarTop", module)
  .add("NavbarTopSearch", () => <NavbarTopSearch />)
  .add("NavbarTopNotif", () => <NavbarTopNotif {...props.notif} />)
  .add("NavbarTopProfile", () => <NavbarTopProfile {...props.profile} />)

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
storiesOf("DashboardContent", module)
  .add("card", () => <DashboardCard contenu={listCardsInHome[2]} />)
  .add("with array of actions", () => (
    <Content elements={listCardsInHome} name={name} />
  ))

storiesOf("Page Folders", module)
  .add("NavbarTop", () => <NavbarTop {...propsWith116notif} />)
  .add("NavbarLeft", () => <Listlink {...listLinksProps} />)
  .add("FoldersBarTop", () => <FoldersBarTop />)

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

const homeLinkProps = {
  nameLink: "Home",
  icon: process.env.PUBLIC_URL + "/img/house_38533.ico"
}

storiesOf("Sign In", module)
  .add("SignInTitle", () => <SignInTitle />)
  .add("SignInButton", () => <SignInButton />)
  .add("SignInEmail", () => <SignInEmail />)
  .add("SignInGetStarted", () => <SignInGetStarted />)
  .add("SignInContent", () => <SignInContent />)

storiesOf("SignInBarLeft", module).add("SignInBarLeft", () => <SignInBarLeft />)

storiesOf("Page SignIn", module).add("PageSignIn", () => <PageSignIn />)

storiesOf("GetStarted", module)
  .add("GetStartedSignInEmail", () => <GetStartedSignInEmail />)
  .add("GetStartedSignInTitle", () => <GetStartedSignInTitle />)
  .add("GetStartedSignInButton", () => <GetStartedSignInButton />)
  .add("GetStartedSignInLinkHaveAnAccount", () => (
    <GetStartedSignInLinkHaveAnAccount />
  ))

storiesOf("PageGetStartedForm", module).add("PageGetStartedForm", () => (
  <PageGetStartedForm />
))
storiesOf("Page GetStarted", module).add("PageGetStarted", () => (
  <PageGetStarted />))

storiesOf("Components Forgot Password", module)
  .add("ForgotPasswordTitle", () => <ForgotPasswordTitle />)
  .add("ForgotPasswordEmail", () => <ForgotPasswordEmail />)
  .add("ForgotPasswordButton", () => <ForgotPasswordButton />)
  .add("ForgotPasswordGetStarted", () => <ForgotPasswordGetStarted />)
  .add("ForgotPasswordBackToSignIn", () => <ForgotPasswordBackToSignIn />)
  .add("ForgotPasswordContent", () => <ForgotPasswordContent />)

storiesOf("Page Forgot Password", module).add("PageForgotPassword", () => (
  <PageForgotPassword />
))
