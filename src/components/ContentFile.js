import React from "react"
import { Table } from "reactstrap"

const oneFile = () => (
  <div>
    <Table>
      <thead>
        <tr>
          <th />
          <th>
            Name<img
              src={process.env.PUBLIC_URL + "img/upDown.ico"}
              alt="upDown"
            />
          </th>
          <th>
            Last Update<img
              src={process.env.PUBLIC_URL + "img/upDown.ico"}
              alt="upDown"
            />
          </th>
          <th>
            Users<img
              src={process.env.PUBLIC_URL + "img/upDown.ico"}
              alt="upDown"
            />
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <th />
          <td>
            <img src={process.env.PUBLIC_URL + "img/folder.ico"} alt="folder" />Applications
          </td>
          <td>23/04/2017 9:12</td>
          <td>
            <img src={process.env.PUBLIC_URL + "img/avatar.ico"} alt="avatar" />
          </td>
          <td>
            <img
              src={process.env.PUBLIC_URL + "img/menuPopup.ico"}
              alt="menuPopup"
            />
          </td>
        </tr>
        <tr>
          <th />
          <td>
            <img src={process.env.PUBLIC_URL + "img/folder.ico"} alt="folder" />Lunchschool
          </td>
          <td>23/04/2017 9:12</td>
          <td>
            <img src={process.env.PUBLIC_URL + "img/avatar.ico"} alt="avatar" />
            <img src={process.env.PUBLIC_URL + "img/avatar.ico"} alt="avatar" />
            <img src={process.env.PUBLIC_URL + "img/avatar.ico"} alt="avatar" />
          </td>
          <td>
            <img
              src={process.env.PUBLIC_URL + "img/menuPopup.ico"}
              alt="menuPopup"
            />
          </td>
        </tr>
        <tr>
          <th />
          <td>
            <img src={process.env.PUBLIC_URL + "img/folder.ico"} alt="folder" />Meduza
            Agency
          </td>
          <td>23/04/2017 9:12</td>
          <td>
            <img src={process.env.PUBLIC_URL + "img/avatar.ico"} alt="avatar" />
            <img src={process.env.PUBLIC_URL + "img/avatar.ico"} alt="avatar" />
          </td>
          <td>
            <img
              src={process.env.PUBLIC_URL + "img/menuPopup.ico"}
              alt="menuPopup"
            />
          </td>
        </tr>
        <tr>
          <th />
          <td>
            <img src={process.env.PUBLIC_URL + "img/folder.ico"} alt="folder" />Mudita
          </td>
          <td>23/04/2017 9:12</td>
          <td>
            <img src={process.env.PUBLIC_URL + "img/avatar.ico"} alt="avatar" />
            <img src={process.env.PUBLIC_URL + "img/avatar.ico"} alt="avatar" />
          </td>
          <td>
            <img
              src={process.env.PUBLIC_URL + "img/menuPopup.ico"}
              alt="menuPopup"
            />
          </td>
        </tr>
        <tr>
          <th />
          <td>
            <img src={process.env.PUBLIC_URL + "img/folder.ico"} alt="folder" />Side
            Projects
          </td>
          <td>23/04/2017 9:12</td>
          <td>
            <img src={process.env.PUBLIC_URL + "img/avatar.ico"} alt="avatar" />
            <img src={process.env.PUBLIC_URL + "img/avatar.ico"} alt="avatar" />
          </td>
          <td>
            <img
              src={process.env.PUBLIC_URL + "img/menuPopup.ico"}
              alt="menuPopup"
            />
          </td>
        </tr>
        <tr>
          <th />
          <td>
            <img src={process.env.PUBLIC_URL + "img/folder.ico"} alt="folder" />Fagger
          </td>
          <td>23/04/2017 9:12</td>
          <td>
            <img src={process.env.PUBLIC_URL + "img/avatar.ico"} alt="avatar" />
          </td>
          <td>
            <img
              src={process.env.PUBLIC_URL + "img/menuPopup.ico"}
              alt="menuPopup"
            />
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
)

export default oneFile
