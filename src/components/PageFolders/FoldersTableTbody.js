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
        <button type="button" onClick={() => onBackclick(parent._id)}>
          {"..."}
        </button>
      )}
      {dirs.map(dir => {
        return <RowDir {...dir} onDirclick={onDirclick} />
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
