import React from "react"

const ContentFile = ({ files, dirs }) => {
  console.log(dirs)
  return (
    <tbody>
      <tr>
        {dirs.map((dir, index) => {
          return (
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          )
        })}
      </tr>
    </tbody>
  )
}

export default ContentFile
