import React from "react"
import { Table } from "reactstrap"
import PropTypes from "prop-types"
import FoldersTableTbody from "./FoldersTableTbody"
import FoldersTableCategory from "./FoldersTableCategory"
import { Scrollbars } from "react-custom-scrollbars"
const FoldersTable = ({
  files = [],
  dirs = [],
  parent = {},
  onDirclick,
  onBackclick,
  onSortName = () => {},
  onSortDate = () => {},
  onSortShare = () => {},
  directionName = "",
  directionDate = "",
  directionshare = ""
}) => (
  <div>
    <Scrollbars
      style={{
        padding: "15px",
        width: "100%",
        height: "65vh"
      }}
    >
      <Table borderless striped>
        <thead>
          <tr>
            <th onClick={onSortName}>
              <FoldersTableCategory name="Name" direction={directionName} />
            </th>
            <th onClick={onSortDate}>
              <FoldersTableCategory
                name="Last update"
                direction={directionDate}
              />
            </th>
            <th onClick={onSortShare}>
              <FoldersTableCategory name="Users" direction={directionshare} />
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
    </Scrollbars>
  </div>
)

FoldersTable.propTypes = {
  files: PropTypes.array,
  dir: PropTypes.array
}

export default FoldersTable
