import React from "react"
import { Table } from "reactstrap"

const ListFile = () => (
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
      </tbody>
    </Table>
  </div>
)

export default ListFile
