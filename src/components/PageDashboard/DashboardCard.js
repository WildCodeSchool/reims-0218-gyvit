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
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const DashboardCard = ({ id, image, titre, bio, buttonText, link }) => {
  return (
    <div>
      <Container>
        <Card
          style={{
            width: "40vh",
            height: "55vh"
          }}
        >
          <CardImg
            src={process.env.PUBLIC_URL + image}
            alt="folder"
            style={{
              width: "60%",
              margin: "auto",
              height: "30%",
              marginTop: "0.5em"
            }}
          />
          <CardBody d-flex flex-column>
            <CardTitle
              style={{
                "font-size": "18px",
                "text-align": "center",
                paddingBottom: "5%"
              }}
            >
              {titre}
            </CardTitle>
            <CardText
              style={{
                fontSize: "15px",
                opacity: "0.45",
                lineHeight: "3vh",
                textAlign: "center"
              }}
            >
              {bio}
            </CardText>
            <Row className="d-flex justify-content-center" style={{}}>
              <Button
                style={{
                  borderRadius: "2px",
                  border: "solid 1px #dce1e6",
                  backgroundColor: "white",
                  margin: "2em"
                }}
              >
                <NavLink
                  style={{
                    fontSize: "16px",
                    color: "#725fe3",
                    marginBottom: 0
                  }}
                  to={link}
                  activeClassName="selected"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                >
                  {buttonText}
                </NavLink>
              </Button>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </div>
  )
}

DashboardCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default DashboardCard
