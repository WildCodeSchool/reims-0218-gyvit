import React from "react"
import PropTypes from "prop-types"
import { DateTime } from "luxon"

const convertDateFromJsonToFrench = dateToTransform =>
  DateTime.fromMillis(Date.parse(dateToTransform))
    .setLocale("fr-FR")
    .toLocaleString(DateTime.DATETIME_SHORT)

const FoldersTableTbody = ({ files = [], dirs = [] }) => {
  return (
    <tbody>
      {dirs.map(dir => {
        return (
          <tr key={dir._id}>
            <td>
              <img
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
            </td>
            <td>
              <div
                style={{
                  width: "160px",
                  height: "14px",
                  fontSize: "14px",
                  marginTop: "28px",
                  fontFamily: "DepotNew",
                  color: "#a5a0c2"
                }}
              >
                {convertDateFromJsonToFrench(dir.modified)}
              </div>
            </td>
            <td>
              {dir.shares.map((share, key) => (
                <i src="" alt={`icone Share n° ${key}`} />
              ))}
              <img
                style={{
                  marginTop: "20px",
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
                marginTop: "37px"
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
            <td>
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
            </td>
            <td>
              <div
                style={{
                  width: "160px",
                  height: "14px",
                  fontFamily: "DepotNew",
                  fontSize: "14px",
                  marginTop: "28px",
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
              </div>
            </td>
            <td>
              {file.shares.map((share, key) => (
                <img src="" alt={`icone Share n° ${key}`} />
              ))}
            </td>
            {/* <td />
            <td /> */}
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
