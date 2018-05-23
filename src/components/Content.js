import React from "react"
import DashboardCard from "./DashboardCard"

const Content = () => {
  const toto = [
    {
      image: "",
      titre: "hello word !",
      bio: "",
      buttonText: "click me"
    },
    {
      image: "",
      titre: "hello word !",
      bio: "",
      buttonText: "click me"
    },
    {
      image: "",
      titre: "hello word !",
      bio: "",
      buttonText: "click me"
    }
  ]
  return
  ;<DashboardCard arrayCard={toto[0]} />
}

export default Content
