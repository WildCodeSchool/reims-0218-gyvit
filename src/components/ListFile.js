import React from "react"
import { Table } from "reactstrap"
import ContentFile from "./ContentFile"
import Category from "./Category"

const ListFile = ({ files = [], dirs = [] }) => (
  <div>
    <Table>
      <thead>
        <tr>
          <th />
          <th>
            <Category name="Name" direction={null} />
          </th>
          <th>
            <Category name="Last update" direction={null} />
          </th>
          <th>
            <Category name="Users" direction={"asc"} />
          </th>
          <th />
        </tr>
      </thead>
      {/*
      <tbody>
        <tr>
          <td />
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
      </tbody>*/}
      <ContentFile files={files} dirs={dirs} />
    </Table>
  </div>
)

export default ListFile
