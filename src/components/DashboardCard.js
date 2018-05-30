import React from "react"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Container,
  Row
} from "reactstrap"

const DashboardCard = ({ contenu }) => {
  const { image, titre, bio, buttonText, link } = { ...contenu }
  return (
    <div>
      <Container>
        <Row>
          <Card
            style={{
              width: "288px",
              height: "423px",
              "margin-right": "32px"
            }}
          >
            <CardImg top width="100%" src={image} alt="Card image cap" />
            <CardBody
              style={{
                "padding-left": "0px",
                "padding-right": "0px"
              }}
            >
              <CardTitle
                style={{
                  size: "18px",
                  "text-align": "center",
                  "padding-left": "0px",
                  "padding-right": "0px"
                }}
              >
                {titre}
              </CardTitle>
              <CardText
                style={{
                  width: "228px",
                  height: "96px",
                  size: "15px",
                  opacity: 0.45,
                  "text-align": "center",
                  "margin-top": "13px",
                  "margin-left": "30px",
                  "margin-right": "30px"
                }}
              >
                {bio}
              </CardText>
              <Button
                style={{
                  width: "170px",
                  height: "44px",
                  size: "16px",
                  "margin-right": "59px",
                  "margin-left": "59px ",
                  "border-radius": "2px",
                  "margin-top": "50px",
                  padding: "0px"
                }}
                src={link}
              >
                {buttonText}
              </Button>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </div>
  )
}
export default DashboardCard
