import React from "react"
import { Table } from "reactstrap"
import FoldersTableTbody from "./FoldersTableTbody"
import FoldersTableCategory from "./FoldersTableCategory"

const FoldersTable = ({ files = [], dirs = [] }) => (
  <div>
    <Table>
      <thead>
        <tr>
          <th />
          <th>
            <FoldersTableCategory name="Name" direction={null} />
          </th>
          <th>
            <FoldersTableCategory name="Last update" direction={null} />
          </th>
          <th>
            <FoldersTableCategory name="Users" direction={"asc"} />
          </th>
          <th />
        </tr>
      </thead>
      <FoldersTableTbody
        files={files}
        dirs={dirs}
        direction={null}
        category={"name"}
      />
    </Table>
  </div>
)

export default FoldersTable
