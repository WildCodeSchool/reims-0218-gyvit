import React from "react"

// const share = ({ key, mail }) => (
//   <div>
//     <i src="" alt={mail} key={key} />
//     <img
//       style={{
//         marginTop: "25px",
//         width: "30px",
//         height: "30px"
//       }}
//       className="rounded-circle"
//       object
//       src="img/kevinMarlot.jpeg"
//       alt="avatar"
//     />
//   </div>
// )
const share = ({ key }) => (
  <img
    src=""
    alt={`icone Share n° ${key}`}
    style={{
      marginTop: "25px",
      width: "30px",
      height: "30px"
    }}
    className="rounded-circle"
    object
  />
)

export default share
