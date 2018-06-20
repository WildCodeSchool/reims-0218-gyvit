import React from "react"
import { Table } from "reactstrap"
import PropTypes from "prop-types"
import FoldersTableTbody from "./FoldersTableTbody"
import FoldersTableCategory from "./FoldersTableCategory"

const FoldersTable = ({
  files = [],
  dirs = [],
  parent = {},
  onDirclick,
  onBackclick
}) => (
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
      <FoldersTableTbody
        onDirclick={onDirclick}
        onBackclick={onBackclick}
        files={files}
        parent={parent}
        dirs={dirs}
      />
    </Table>
  </div>
)

FoldersTable.propTypes = {
  files: PropTypes.array,
  dir: PropTypes.array
}

export default FoldersTable
