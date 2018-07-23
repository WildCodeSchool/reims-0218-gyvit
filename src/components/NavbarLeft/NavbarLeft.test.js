//TODO test navbar list of links

import React from "react"
import ReactDOM from "react-dom"
import renderer from "react-test-renderer"
import NavbarLeft from "./NavbarLeft"

const listLinksProps = {
  dataLinks: [
    {
      nameLink: "Accueil",
      icon: process.env.PUBLIC_URL + "/img/house_38533.ico"
    },
    {
      nameLink: "Fichiers",
      icon: process.env.PUBLIC_URL + "/img/files.ico"
    },
    {
      nameLink: "Partages",
      icon: process.env.PUBLIC_URL + "/img/share.ico"
    },
    {
      nameLink: "Modèles",
      icon: process.env.PUBLIC_URL + "/img/templates.ico"
    },
    {
      nameLink: "Demandes",
      icon: process.env.PUBLIC_URL + "/img/request.ico"
    },
    {
      nameLink: "Liens public",
      icon: process.env.PUBLIC_URL + "/img/links.ico"
    },
    {
      nameLink: "Contacts",
      icon: process.env.PUBLIC_URL + "/img/contact.ico"
    },
    {
      nameLink: "Paramètres",
      icon: process.env.PUBLIC_URL + "/img/settings.ico"
    }
  ]
}

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<NavbarLeft {...listLinksProps} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it("renders link html", () => {
  const tree = renderer.create(<NavbarLeft {...listLinksProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
