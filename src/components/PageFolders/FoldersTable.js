import React from "react"
import { Table } from "reactstrap"
import PropTypes from "prop-types"
import FoldersTableTbody from "./FoldersTableTbody"
import FoldersTableCategory from "./FoldersTableCategory"

const FoldersTable = ({ files = [], dirs = [], onDirclick }) => (
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
      <FoldersTableTbody onDirclick={onDirclick} files={files} dirs={dirs} />
    </Table>
  </div>
)

FoldersTable.propTypes = {
  files: PropTypes.array,
  dir: PropTypes.array
}

export default FoldersTable
