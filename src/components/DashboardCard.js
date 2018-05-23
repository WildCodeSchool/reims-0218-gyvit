import React from "react"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap"

const DashboardCard = ({ contenu }) => (
  <div>
    <Card>
      <CardImg top width="100%" src={contenu.image} alt="Card image cap" />
      <CardBody>
        <CardTitle>{contenu.titre}</CardTitle>
        <CardText>{contenu.bio}</CardText>
        <Button src={contenu.link}>{contenu.buttonText}</Button>
      </CardBody>
    </Card>
  </div>
)

export default DashboardCard
