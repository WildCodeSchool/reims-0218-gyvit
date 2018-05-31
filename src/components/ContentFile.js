import React from "react"
import { DateTime } from "luxon"

const convertDateFromJsonToFrench = dateToTransform =>
  DateTime.fromMillis(Date.parse(dateToTransform))
    .setLocale("fr-FR")
    .toLocaleString(DateTime.DATETIME_SHORT)

const ContentFile = ({ files, dirs, direction = null, category = "name" }) => {
  return (
    <tbody>
      {dirs.sort((dira, dirb) => {
        return dira.name - dirb.name
      })}
      {dirs.map(dir => {
        return (
          <tr key={dir._id}>
            <th />
            <th>
              <img
                src={process.env.PUBLIC_URL + "Icons/icon_folder.png"}
                alt="Directory Icon"
              />
              {dir.name}
            </th>
            <td>{convertDateFromJsonToFrench(dir.modified)}</td>
            <td>
              {dir.shares.map((share, key) => (
                <i src="" alt={`icone Share n° ${key}`} />
              ))}
            </td>
          </tr>
        )
      })}
      {files.map(file => {
        return (
          <tr key={file._id}>
            <th />
            <th>
              <img
                src={process.env.PUBLIC_URL + "Icons/icon_file_image.svg"}
                alt="file Icon"
              />
              {file.name}
            </th>
            <td>{convertDateFromJsonToFrench(file.modified)}</td>
            <td>
              {file.shares.map((share, key) => (
                <img src="" alt={`icone Share n° ${key}`} />
              ))}
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default ContentFile
