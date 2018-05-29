import React from "react"
import { DateTime } from "luxon"

const ContentFile = ({ files, dirs }) => {
  return (
    <tbody>
      {dirs.map((dir, index) => {
        const dateMilli = Date.parse(dir.modified)
        const dateToDisplay = DateTime.fromMillis(dateMilli).toLocaleString(
          DateTime.DATETIME_SHORT
        )
        return (
          <tr>
            <th>
              <i src="" alt="Directory Icon" />
            </th>
            <th>{dir.name}</th>
            <th>{dir.modified + "   " + dateToDisplay}</th>
            <th>
              {dir.shares.map((share, index) => (
                <i src="" alt={`icone Share n° ${index}`} />
              ))}
            </th>
          </tr>
        )
      })}
      {files.map((file, index) => {
        const dateMilli = Date.parse(file.modified)
        return (
          <tr>
            <th>
              <i src="" alt="file Icon" />
            </th>
            <th>{file.name}</th>
            <th>{file.modified + "   " + dateMilli.toLocaleString("fr-fr")}</th>
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
