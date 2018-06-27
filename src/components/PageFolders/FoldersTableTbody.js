import React from "react"
import PropTypes from "prop-types"
import RowDir from "./RowDir"
import RowFile from "./RowFile"

const FoldersTableTbody = ({
  files = [],
  dirs = [],
  onDirclick,
  onBackclick,
  parent = {}
}) => {
  return (
    <tbody>
      {parent._id && (
        <tr
          rel="nofollow"
          title="Go to parent directory"
          className="js-navigation-open"
          onClick={() => onBackclick(parent._id)}
        >
          <td>{"..."}</td>
        </tr>
      )}
      {dirs.map((dir, index) => {
        return <RowDir key={index} {...dir} onDirclick={onDirclick} />
      })}
      {files.map(file => {
        return <RowFile {...file} />
      })}
    </tbody>
  )
}

FoldersTableTbody.propTypes = {
  files: PropTypes.array,
  dir: PropTypes.array
}

export default FoldersTableTbody
