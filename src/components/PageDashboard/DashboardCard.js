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
        <Row>
          <Card
            style={{
              width: "288px",
              height: "423px"
            }}
          >
            <CardImg
              src={process.env.PUBLIC_URL + image}
              alt="folder"
              style={{
                width: "151px",
                height: "120px",
                marginTop: "31px",
                marginLeft: "72px",
                marginRight: "64.8px"
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
                  fontSize: "18px",
                  textAlign: "center",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                  marginTop: "15px",
                  marginLeft: "57px",
                  marginRight: "56px"
                }}
              >
                {titre}
              </CardTitle>
              <CardText
                style={{
                  width: "228px",
                  height: "96px",
                  fontSize: "15px",
                  opacity: 0.45,
                  textAlign: "center",
                  marginTop: "13px",
                  marginLeft: "30px",
                  marginRight: "30px",
                  marginBottom: "50px",
                  lineHeight: "24px"
                }}
              >
                {bio}
              </CardText>
              <Button>
                <NavLink
                  style={{
                    width: "170px",
                    height: "44px",
                    fontSize: "16px",
                    borderRadius: "2px",
                    marginRight: "59px",
                    marginLeft: "59px ",
                    marginBottom: "30px",
                    padding: "0px",
                    color: "white"
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
            </CardBody>
          </Card>
        </Row>
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
