import React from "react"
const moment = require("moment-timezone")

const ContentFile = ({ files, dirs }) => {
  return (
    <tbody>
      {dirs.map((dir, index) => {
        return (
          <tr>
            <th>
              <i src="" alt="Directory Icon" />
            </th>
            <th>{dir.name}</th>
            <th>{dir.modified + "   " + Date.parse(dir.modified)}</th>
            <th>
              {dir.shares.map((share, index) => (
                <i src="" alt={`icone Share n° ${index}`} />
              ))}
            </th>
          </tr>
        )
      })}
      {files.map((file, index) => {
        return (
          <tr>
            <th>
              <i src="" alt="file Icon" />
            </th>
            <th>{file.name}</th>
            <th>{file.modified + "   " + Date.parse(file.modified)}</th>
            <th>
              {file.shares.map((share, index) => (
                <i src="" alt={`icone Share n° ${index}`} />
              ))}
            </th>
          </tr>
        )
      })}
    </tbody>
  )
}

export default ContentFile
