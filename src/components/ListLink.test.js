//TODO test navbar list of links

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import ListLink from "./ListLink"

const listLinksProps = {
  dataLinks: [
    {
      nameLink: "Home",
      icon: process.env.PUBLIC_URL + "/img/house_38533.ico"
    },
    {
      nameLink: "Files",
      icon: process.env.PUBLIC_URL + "/img/files.ico"
    },
    {
      nameLink: "Shares",
      icon: process.env.PUBLIC_URL + "/img/share.ico"
    },
    {
      nameLink: "Templates",
      icon: process.env.PUBLIC_URL + "/img/templates.ico"
    },
    {
      nameLink: "Requests",
      icon: process.env.PUBLIC_URL + "/img/request.ico"
    },
    {
      nameLink: "Public links",
      icon: process.env.PUBLIC_URL + "/img/links.ico"
    },
    {
      nameLink: "Contacts",
      icon: process.env.PUBLIC_URL + "/img/contact.ico"
    },
    {
      nameLink: "Settings",
      icon: process.env.PUBLIC_URL + "/img/settings.ico"
    }
  ]
}

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ListLink {...listLinksProps} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<ListLink {...listLinksProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
