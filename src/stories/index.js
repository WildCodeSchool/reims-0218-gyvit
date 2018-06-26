import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "../reducers"
import { storiesOf } from "@storybook/react"
import "bootstrap/dist/css/bootstrap.min.css"
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
import NotifContainer from "../containers/NotifContainer"

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
  .add("Notif", () => <NotifContainer />)

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
        },
        {
          _id: "share_ILiwSET05VPFsAVTPZMi",
          object: "share",
          created: "2018-06-25T12:30:06+00:00",
          modified: "2018-06-25T12:30:06+00:00",
          account: {
            _id: "acct_I3o9e2Ju78lKeN9eMdLN",
            object: "account",
            mail: "romain@meduza-studio.com",
            lastname: "romain",
            firstname: "duflot",
            role: "user",
            active: 1,
            created: "2018-03-29T00:00:00+00:00",
            modified: "2018-03-29T00:00:00+00:00",
            pic: "img/romainDuflot.jpg"
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

storiesOf("FolderTable", module).add("Table", () => (
  <FoldersTable {...tableProps} />
))
