import React from "react"
import PropTypes from "prop-types"
import { DateTime } from "luxon"

const convertDateFromJsonToFrench = dateToTransform =>
  DateTime.fromMillis(Date.parse(dateToTransform))
    .setLocale("fr-FR")
    .toLocaleString(DateTime.DATETIME_SHORT)

const FoldersTableTbody = ({
  files = [],
  dirs = [],
  onDirclick,
  parent = {}
}) => {
  return (
    <tbody>
      {parent && (
        <button type="button" onClick={() => onDirclick(dirs._id)}>
          {" "}
        </button>
      )}
      {dirs.map(dir => {
        return (
          <tr key={dir._id}>
            <td>
              <img
                onClick={() => onDirclick(dir._id)}
                style={{
                  width: "12%",
                  height: "9%",
                  marginTop: "7%",
                  marginBottom: "9%",
                  marginRight: "7%"
                }}
                src={process.env.PUBLIC_URL + "Icons/icon_folder.png"}
                alt="Directory Icon"
              />
              {dir.name}
            </td>
            <td>
              <div
                style={{
                  width: "60%",
                  height: "9%",
                  fontSize: "14px",
                  marginTop: "11%",
                  fontFamily: "DepotNew",
                  color: "#a5a0c2"
                }}
              >
                {convertDateFromJsonToFrench(dir.modified)}
              </div>
            </td>
            <td>
              {dir.shares &&
                dir.shares.map((share, index) => (
                  <i
                    style={{
                      marginTop: "8%",
                      width: "10%",
                      height: "10%"
                    }}
                    src=""
                    object
                    className="rounded-circle"
                    alt={`icone Share n° ${index}`}
                  />
                ))}
            </td>
            <img
              style={{
                marginTop: "120%"
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
                  width: "14%",
                  height: "16%",
                  marginTop: "8%",
                  marginBottom: "8%",
                  marginRight: "7%"
                }}
                src={process.env.PUBLIC_URL + "Icons/icon_file_image.svg"}
                alt="file Icon"
              />
              {file.name}
            </td>
            <td>
              <div
                style={{
                  width: "60%",
                  height: "9%",
                  fontFamily: "DepotNew",
                  fontSize: "14px",
                  marginTop: "14%",
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
