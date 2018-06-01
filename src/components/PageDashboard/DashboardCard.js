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
  const { titre, bio, buttonText, link } = { ...contenu }
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
            <CardImg
              src={process.env.PUBLIC_URL + "img/folder.ico"}
              alt="folder"
              style={{
                width: "151.2px",
                height: "120px",
                "margin-top": "31px",
                "margin-left": "72px",
                "margin-right": "64.8px"
              }}
            />
            <CardBody
              style={{
                padding: "0px"
              }}
            >
              <CardTitle
                style={{
                  width: "175px",
                  height: "24px",
                  "font-size": "18px",
                  "text-align": "center",
                  "padding-left": "0px",
                  "padding-right": "0px",
                  "margin-top": "15px",
                  "margin-left": "57px",
                  "margin-right": "56px"
                }}
              >
                {titre}
              </CardTitle>
              <CardText
                style={{
                  width: "228px",
                  height: "96px",
                  "font-size": "15px",
                  opacity: 0.45,
                  "text-align": "center",
                  "margin-top": "13px",
                  "margin-left": "30px",
                  "margin-right": "30px",
                  "margin-bottom": "50px",
                  "line-height": "24px"
                }}
              >
                {bio}
              </CardText>
              <Button
                style={{
                  width: "170px",
                  height: "44px",
                  "font-size": "16px",
                  "border-radius": "2px",
                  "margin-right": "59px",
                  "margin-left": "59px ",
                  "margin-bottom": "30px",
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
