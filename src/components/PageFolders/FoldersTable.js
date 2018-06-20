import React from "react"
import { Table } from "reactstrap"
import PropTypes from "prop-types"
import FoldersTableTbody from "./FoldersTableTbody"
import FoldersTableCategory from "./FoldersTableCategory"

const FoldersTable = ({ files = [], dirs = [], name }) => (
  <div>
    <Table borderless striped>
      <thead>
        <tr>
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
      <FoldersTableTbody files={files} dirs={dirs} />
    </Table>
  </div>
)

FoldersTable.propTypes = {
  files: PropTypes.array,
  dir: PropTypes.array
}

export default FoldersTable
