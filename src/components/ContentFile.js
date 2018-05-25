import React from "react"

const ContentFile = ({ files, dirs }) => {
  console.log(dirs)
  return (
    <tbody>
      {dirs.map((dir, index) => {
        return (
          <tr>
            <th>
              <i src="" alt="Directory Icon" />
            </th>
            <th>{dir.name}</th>
            <th>{dir.modified}</th>
            <th>
              {dir.shares.map((share, index) => (
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
