import React from "react"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap"

const DashboardCard = ({ image, titre, bio, buttonText }) => (
  <div>
    <Card>
      <CardImg top width="100%" src={image} alt="Card image cap" />
      <CardBody>
        <CardTitle>{titre}</CardTitle>
        <CardText>{bio}</CardText>
        <Button>{buttonText}</Button>
      </CardBody>
    </Card>
  </div>
)

export default DashboardCard
