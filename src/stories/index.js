import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "../reducers"
import { storiesOf } from "@storybook/react"

import "bootstrap/dist/css/bootstrap.min.css"
/* import DashboardCard from "../components/PageDashboard/DashboardCard"
import NavbarLeft from "../components/NavbarLeft/NavbarLeft"
import NavbarLeftItem from "../components/NavbarLeft/NavbarLeftItem"
import NavbarTop from "../components/NavbarTop/NavbarTop"
import NavbarTopSearch from "../components/NavbarTop/NavbarTopSearch"
import NavbarLeftLogo from "../components/NavbarLeft/NavbarLeftLogo"
import NavbarTopNotif from "../components/NavbarTop/NavbarTopNotif"
import NavbarTopProfile from "../components/NavbarTop/NavbarTopProfile"
import NavbarTopNotifBubble from "../components/NavbarTop/NavbarTopNotifBubble"
import FoldersTable from "../components/PageFolders/FoldersTable"
import FoldersBarTop from "../components/PageFolders/FoldersBarTop"
import GetStartedSignInEmail from "../components/PageGetStarted/GetStartedSignInEmail"
import GetStartedSignInTitle from "../components/PageGetStarted/GetStartedSignInTitle"
import GetStartedSignInButton from "../components/PageGetStarted/GetStartedSignInButton"
import GetStartedForm from "../components/PageGetStarted/GetStartedForm"
import PageGetStarted from "../components/PageGetStarted/PageGetStarted"
import PageFolders from "../components/PageFolders/PageFolders"
import PageDashboard from "../components/PageDashboard/PageDashboard"
import PageSignIn from "../components/PageSignIn/PageSignIn"
import SignInBarLeft from "../components/PageSignIn/SignInBarLeft"
import SignInContent from "../components/PageSignIn/SignInContent" 
import SignInTitle from "../components/PageSignIn/SignInTitle"
import SignInGetStarted from "../components/PageSignIn/SignInGetStarted"
import DashboardListCards from "../components/PageDashboard/DashboardListCards"
import GetStartedSignInLinkHaveAnAccount from "../components/PageGetStarted/GetStartedSignInLinkHaveAnAccount"
import ForgotPasswordTitle from "../components/PageForgotPassword/ForgotPasswordTitle"
import ForgotPasswordEmail from "../components/PageForgotPassword/ForgotPasswordEmail"
import ForgotPasswordButton from "../components/PageForgotPassword/ForgotPasswordButton"
import ForgotPasswordContent from "../components/PageForgotPassword/ForgotPasswordContent"
import ForgotPasswordBackToSignIn from "../components/PageForgotPassword/ForgotPasswordBackToSignIn"
import PageForgotPassword from "../components/PageForgotPassword/PageForgotPassword"
import ForgotPasswordGetStarted from "../components/PageForgotPassword/ForgotPasswordGetStarted"
import GetStartedSignInContent from "../components/PageGetStarted/GetStartedSignInContent" */

import SignInFormContainer from "../containers/SignInFormContainer"
import NavbarTopProfileContainer from "../containers/NavbarTopProfileContainer"
import FoldersTableContainer from "../containers/FoldersTableContainer"
import PageFolders from "../components/PageFolders/PageFolders"
import PageDashboardCards from "../components/PageDashboard/PageDashboardCards"
import PageSignIn from "../components/PageSignIn/PageSignIn"
import PageGetStarted from "../components/PageGetStarted/PageGetStarted"
import PageForgotPassword from "../components/PageForgotPassword/PageForgotPassword"
import FoldersTable from "../components/PageFolders/FoldersTable"

import RowDir from "../components/PageFolders/RowDir"
import RowFile from "../components/PageFolders/RowFile"
import { Table } from "reactstrap"

/* const homeLinkProps = {
  nameLink: "Home",
  icon: process.env.PUBLIC_URL + "/img/house_38533.ico"
}
storiesOf(" Main Components", module)
  .add("NavbarTop", () => <NavbarTop {...props} />)
  .add("NavbarLeft", () => <NavbarLeft {...listLinksProps} />)

storiesOf(" Dashboard Components", module)
  .add("DashboardContent", () => (
    <DashboardListCards elements={listCardsInHome} name={name} />
  ))
  .add("card", () => <DashboardCard contenu={listCardsInHome[2]} />)

storiesOf("NavbarLeft", module)
  .add("NavbarLeftItem", () => <NavbarLeftItem {...homeLinkProps} />)
  .add("NavBarLeftLogo", () => <NavbarLeftLogo />)

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

storiesOf("Components Page Sign In", module)
  .add("SignInTitle", () => <SignInTitle />)
  .add("SignInForm", () => <SignInFormContainer />)
  .add("SignInGetStarted", () => <SignInGetStarted />)
  .add("SignInContent", () => <SignInContent />)

storiesOf("Component SignInBarLeft", module).add("SignInBarLeft", () => (
  <SignInBarLeft />
))

storiesOf("Page SignIn", module).add("PageSignIn", () => <PageSignIn />)

storiesOf("Components Page Folders", module)
  .add("FoldersBarTop", () => <FoldersBarTop />)
  .add("FoldersTable", () => <FoldersTable files={files} dirs={dirs} />)

storiesOf("Page Folders", module).add("PageFolders", () => (
  <PageFolders {...listLinksProps} {...props} files={files} dirs={dirs} />
))

storiesOf("Component GetStarted", module)
  .add("GetStartedSignInEmail", () => <GetStartedSignInEmail />)
  .add("GetStartedSignInTitle", () => <GetStartedSignInTitle />)
  .add("GetStartedSignInButton", () => <GetStartedSignInButton />)
  .add("GetStartedSignInLinkHaveAnAccount", () => (
    <GetStartedSignInLinkHaveAnAccount />
  ))
  .add("GetStartedForm", () => <GetStartedForm />)
  .add("GetStartedSignInContent", () => <GetStartedSignInContent />)

storiesOf("Page GetStarted", module).add("PageGetStarted", () => (
  <PageGetStarted />
))

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

storiesOf("PageDashboard", module).add("PageDashboard", () => (
  <PageDashboard
    {...listLinksProps}
    {...props}
    elements={listCardsInHome}
    name={name}
  />
)) */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
storiesOf("Redux", module)
  .addDecorator(getStory => <Provider store={store}>{getStory()}</Provider>)
  .add("SignIn container", () => <SignInFormContainer />)
  .add("NavbarTopProfileContainer", () => <NavbarTopProfileContainer />)
  .add("FoldersTableContainer", () => <FoldersTableContainer />)
  .add("Page Folders", () => <PageFolders />)
  .add("PageDashboardCards", () => <PageDashboardCards />)
  .add("PageSignIn", () => <PageSignIn />)
  .add("Page GetStarted", () => <PageGetStarted />)
  .add("Page ForgotPassword", () => <PageForgotPassword />)

const tableProps = {
  dirs: [
    {
      _id: "dir_DOl2kN3n9lMeedN90kL9",
      object: "directory",
      name: "SammTrading",
      created: "2018-03-29T00:00:00+00:00",
      modified: "2018-03-29T00:00:00+00:00",
      shares: [
        {
          _id: "share_ILiwSET05VPFsAVTPZMi",
          object: "share",
          created: "2018-06-25T12:30:06+00:00",
          modified: "2018-06-25T12:30:06+00:00",
          account: {
            _id: "acct_I3o9e2Ju78lKeN9eMdLN",
            object: "account",
            mail: "kevin@meduza-studio.com",
            lastname: "Marlot",
            firstname: "kevin",
            role: "user",
            active: 1,
            created: "2018-03-29T00:00:00+00:00",
            modified: "2018-03-29T00:00:00+00:00",
            pic: "img/kevinMarlot.jpeg"
          }
        }
      ],
      files: [],
      dirs: [
        {
          _id: "dir_EoeInRgUgzMPh0aLN2nz",
          object: "directory",
          name: "Webshop",
          created: "2018-03-29T11:36:42+00:00",
          modified: "2018-03-29T11:36:42+00:00",
          shares: []
        }
      ]
    }
  ],

  files: [
    {
      _id: "file_7F2jhzx5RlO8u5C1SP3c",
      object: "file",
      name: "TEST FOR POST",
      size: 0,
      ext: "",
      type: "",
      remove: 0,
      created: "2018-04-22T08:34:26+00:00",
      modified: "2018-04-22T08:34:26+00:00",
      removed: null,
      shares: [],
      dir: {
        _id: "dir_r4V13RVeHFFVvOLctpPe",
        object: "directory",
        name: "Sketchs & Photoshops",
        created: "2018-03-30T11:53:23+00:00",
        modified: "2018-03-30T12:11:15+00:00"
      }
    }
  ]
}
storiesOf("component RowDir", module).add("RowDir", () => (
  <Table>
    <tbody>
      <RowDir {...dir} />
    </tbody>
  </Table>
))

// créer un composant (fonction) RowDir => {_id, name, shares}
// pass this prop
const dir = {
  _id: "dir_DOl2kN3n9lMeedN90kL9",
  object: "directory",
  name: "SammTrading",
  created: "2018-03-29T00:00:00+00:00",
  modified: "2018-03-29T00:00:00+00:00",
  shares: [],
  files: [],
  dirs: [
    {
      _id: "dir_EoeInRgUgzMPh0aLN2nz",
      object: "directory",
      name: "Webshop",
      created: "2018-03-29T11:36:42+00:00",
      modified: "2018-03-29T11:36:42+00:00",
      shares: []
    }
  ]
}

storiesOf("component RowFile", module).add("RowFile", () => (
  <Table>
    <tbody>
      <RowFile {...file} />
    </tbody>
  </Table>
))
// <RowDir {...dir} />
// PR
// replace line 24 <tr>...</tr> by  <RowDir {...dir} />

const file = {
  _id: "file_7F2jhzx5RlO8u5C1SP3c",
  object: "file",
  name: "TEST FOR POST",
  size: 0,
  ext: "",
  type: "",
  remove: 0,
  created: "2018-04-22T08:34:26+00:00",
  modified: "2018-04-22T08:34:26+00:00",
  removed: null,
  shares: [],
  dir: {
    _id: "dir_r4V13RVeHFFVvOLctpPe",
    object: "directory",
    name: "Sketchs & Photoshops",
    created: "2018-03-30T11:53:23+00:00",
    modified: "2018-03-30T12:11:15+00:00"
  }
}

// make RowFile

// <RowFile {...file} />
// replace line 85 <tr>...</tr> by  <RowFile {...file} />
// PR

// FIX CSS
//PR

// Button Dropdown
// PR
// Button Dropdown
storiesOf("FolderTable", module).add("Table", () => (
  <FoldersTable {...tableProps} />
))
