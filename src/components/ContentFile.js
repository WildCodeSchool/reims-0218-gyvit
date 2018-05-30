import React from "react"
import { DateTime } from "luxon"

const convertDate = dateToTransform =>
  DateTime.fromMillis(Date.parse(dateToTransform))
    .setLocale("fr-fr")
    .toLocaleString(DateTime.DATETIME_SHORT)

const ContentFile = ({ files, dirs }) => {
  return (
    <tbody>
      {dirs.map(dir => {
        return (
          <tr key>
            <th>
              <i src="" alt="Directory Icon" />
            </th>
            <th>{dir.name}</th>
            <th>{convertDate(dir.modified)}</th>
            <th>
              {dir.shares.map((share, key) => (
                <i src="" alt={`icone Share n° ${key}`} />
              ))}
            </th>
          </tr>
        )
      })}
      {files.map(file => {
        return (
          <tr key>
            <th>
              <i src="" alt="file Icon" />
            </th>
            <th>{file.name}</th>
            <th>{convertDate(file.modified)}</th>
            <th>
              {file.shares.map((share, key) => (
                <i src="" alt={`icone Share n° ${key}`} />
              ))}
            </th>
          </tr>
        )
      })}
    </tbody>
  )
}

export default ContentFile
