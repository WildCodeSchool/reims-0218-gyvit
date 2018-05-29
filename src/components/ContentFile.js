import React from "react"
import { DateTime } from "luxon"

const transformDate = dateToTransform => {
  const dateMilli = Date.parse(dateToTransform)
  const dateToDisplay = DateTime.fromMillis(dateMilli).toLocaleString(
    DateTime.DATETIME_SHORT
  )
  const dateEnMorceaux = dateToDisplay.split("à")
  const dateComplete = dateEnMorceaux[0] + dateEnMorceaux[1]

  return dateComplete
}

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
            <th>{transformDate(dir.modified)}</th>
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
            <th>{transformDate(file.modified)}</th>
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
