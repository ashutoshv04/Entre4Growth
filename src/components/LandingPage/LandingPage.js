import React from "react";
import { Caraousel } from "../Caraousel/Caraousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./LandingPage.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import {
  BsArrowRightSquare,BsPower,BsBuildingAdd,
} from "react-icons/bs";

export const LandingPage = () => {
  const cardStyle = {
    height: '60%',
  };

  return (
    <div className="container">
      <div className="viewport">
      <div className="row">
        <h1>Entre4Growth</h1>
        <div className="main-title"><h3>One Stop Platform for Budding Entrepreneurs</h3></div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-6">
          <Caraousel />
        </div>
      </div>
      <div className="row">
        <div className="main-title">
        <h2>
        Join Entre4Growth on its mission to promote <br/>entrepreneurship in India
        </h2>
        </div>
        <div className="col-md-4 col-sm-6">
          {/* <p>We offer amazing services for entreprenuers</p> */}
          <CardGroup>
            <Card style={cardStyle}>
              <Card.Img
                variant="top"
                src="./account.png"
                className="card-css"
              />
              <Card.Body>
                <Card.Title>Have an Account?</Card.Title>
                <Card.Text>
                  <div className="mb-3">
                  <p>Log in and open doors to growth</p>
                    <a href="/login">
                      <Button variant="primary" size="lg">
                      <BsPower size={25}/> 
                        Login
                      </Button>
                    </a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
        <div className="col-md-4 col-sm-6">
          <CardGroup>
          <Card style={cardStyle}>
              <Card.Img
                variant="top"
                src="./entrepreneurship.png"
                className="card-css"
              />
              <Card.Body>
                <Card.Title>New User</Card.Title>
                <Card.Text>
                  <div className="mb-3">
                  <p>Get started and pave your path to success</p>
                    <a href="/signup">
                      <Button variant="primary" size="lg">
                      <BsArrowRightSquare/>
                      Get onboard
                      </Button>
                    </a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
        <div className="col-md-4 col-sm-6">
          <CardGroup>
          <Card style={cardStyle}>
              <Card.Img
                variant="top"
                src="./investor.png"
                className="card-css"
              />
              <Card.Body>
                <Card.Title>Become an Investor</Card.Title>
                <Card.Text>
                  <div className="mb-3">
                  <p>Want to invest ? Invest with us </p>
                    <a href="/investor-signup">
                      <Button variant="primary" size="lg">
                      <BsBuildingAdd size={25}/>
                        SignUp
                      </Button>
                    </a>
                    &nbsp;
                    <a href="/investor-login">
                      <Button variant="primary" size="lg">
                      <BsPower size={25}/> 
                        Login
                      </Button>
                    </a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
      </div>
    </div>
  );
};
