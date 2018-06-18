import React from "react"
import PropTypes from "prop-types"
import { DateTime } from "luxon"

const convertDateFromJsonToFrench = dateToTransform =>
  DateTime.fromMillis(Date.parse(dateToTransform))
    .setLocale("fr-FR")
    .toLocaleString(DateTime.DATETIME_SHORT)

const FoldersTableTbody = ({ files = [], dirs = [], onRetrieveDirSuccess }) => {
  return (
    <tbody>
      {dirs.map(dir => {
        return (
          <tr key={dir._id}>
            <th />
            <th>
              <img
                onClick={() => onRetrieveDirSuccess(files._id)}
                style={{
                  width: "30px",
                  height: "29px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  marginRight: "19.1px"
                }}
                src={process.env.PUBLIC_URL + "Icons/icon_folder.png"}
                alt="Directory Icon"
              />
              {dir.name}
            </th>
            <td
              style={{
                width: "170px",
                height: "14px",
                fontFamily: "DepotNew",
                fontSize: "14px",
                marginTop: "28px",
                marginBottom: "28px",
                textAlign: "center",
                color: "#a5a0c2"
              }}
            >
              {convertDateFromJsonToFrench(dir.modified)}
            </td>
            <td>
              {dir.shares &&
                dir.shares.map((share, key) => (
                  <i src="" alt={`icone Share n° ${key}`} />
                ))}
              <img
                style={{
                  marginTop: "25px",
                  width: "30px",
                  height: "30px"
                }}
                className="rounded-circle"
                object
                src="img/kevinMarlot.jpeg"
                alt="avatar"
              />
            </td>
            <img
              style={{
                marginTop: "33px"
              }}
              src="Assets/icon_dots_more.png"
              alt=""
            />
            <td />
          </tr>
        )
      })}
      {files.map(file => {
        return (
          <tr key={file._id}>
            <th />
            <th>
              <img
                style={{
                  width: "26.2px",
                  height: "32px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  marginRight: "19.1px"
                }}
                src={process.env.PUBLIC_URL + "Icons/icon_file_image.svg"}
                alt="file Icon"
              />
              {file.name}
            </th>
            <td
              style={{
                width: "104px",
                height: "14px",
                fontFamily: "DepotNew",
                fontSize: "14px",
                fontWeight: "normal",
                fontStyle: "normal",
                fontStretch: "normal",
                lineHeight: "normal",
                letterSpacing: "normal",
                textAlign: "left",
                color: "#a5a0c2"
              }}
            >
              {convertDateFromJsonToFrench(file.modified)}
            </td>
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

FoldersTableTbody.propTypes = {
  files: PropTypes.array,
  dir: PropTypes.array
}

export default FoldersTableTbody
