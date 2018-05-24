import React from "react"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap"

const DashboardCard = ({ contenu }) => {
  const { image, titre, bio, buttonText, link } = { ...contenu }
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{titre}</CardTitle>
          <CardText>{bio}</CardText>
          <Button src={link}>{buttonText}</Button>
        </CardBody>
      </Card>
    </div>
  )
}
export default DashboardCard
