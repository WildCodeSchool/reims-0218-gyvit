import React from "react"
import { DateTime } from "luxon"

const convertDateFromJsonToFrench = dateToTransform =>
  DateTime.fromMillis(Date.parse(dateToTransform))
    .setLocale("fr-FR")
    .toLocaleString(DateTime.DATETIME_SHORT)

const ContentFile = ({ files, dirs }) => {
  return (
    <tbody>
      {dirs.map(dir => {
        return (
          <tr key={dir._id}>
            <th>
              <img
                src={process.env.PUBLIC_URL + "img/folder.ico"}
                alt="Directory Icon"
              />
            </th>
            <th>{dir.name}</th>
            <th>{convertDateFromJsonToFrench(dir.modified)}</th>
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
          <tr key={file._id}>
            <th>
              <i src="" alt="file Icon" />
            </th>
            <th>{file.name}</th>
            <th>{convertDateFromJsonToFrench(file.modified)}</th>
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
