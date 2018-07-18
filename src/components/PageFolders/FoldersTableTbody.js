import React from "react"
import PropTypes from "prop-types"
import RowDir from "./RowDir"
import RowFile from "./RowFile"

const FoldersTableTbody = ({
  files = [],
  dirs = [],
  onDirclick,
  onBackclick,
  onRadioBtnClick,
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
          style={{ cursor: "pointer" }}
        >
          <td>{"..."}</td>
        </tr>
      )}
      {dirs &&
        dirs.map((dir, index) => {
          return (
            <RowDir
              key={index}
              dir={dir}
              onDirclick={onDirclick}
              onRadioBtnClick={onRadioBtnClick}
            />
          )
        })}
      {files &&
        files.map(file => {
          return <RowFile key={file._id} file={file} />
        })}
    </tbody>
  )
}

FoldersTableTbody.propTypes = {
  file: PropTypes.array,
  dir: PropTypes.array
}

export default FoldersTableTbody
