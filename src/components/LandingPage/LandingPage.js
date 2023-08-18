import React, { useState } from "react";
import { Caraousel } from "../Caraousel/Caraousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./LandingPage.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import Button from "react-bootstrap/Button";

export const LandingPage = () => {
  return (
    <div className="container">
      <div className="row">
        <h1>Entre4Growth</h1>
        <p>One Stop Platform for Budding Entreprenuers</p>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-6">
          <Caraousel />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-6">
          {/* <p>We offer amazing services for entreprenuers</p> */}
          {/*  */}
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="./card/im-3.jpg"
                className="card-css"
              />
              <Card.Body>
                <Card.Title>Already Have an Account?</Card.Title>
                <Card.Text>
                  <div className="mb-3">
                    <Button variant="primary" size="lg">
                      <a href="/login">Login</a>
                    </Button>
                  </div>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
        <div className="col-md-4 col-sm-6">
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="./card/im-4.jpg"
                className="card-css"
              />
              <Card.Body>
                <Card.Title>New User</Card.Title>
                <Card.Text>
                  <div className="mb-3">
                    <Button variant="primary" size="lg">
                      <a href="/signup">Get Started</a>
                    </Button>
                    </div>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
        <div className="col-md-4 col-sm-6">
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="./card/im-5.jpg"
                className="card-css"
              />
              <Card.Body>
                <Card.Title>Investor</Card.Title>
                <Card.Text>
                <div className="mb-3">
                    <Button variant="primary" size="lg">
                      <a href="/">SignUp</a>
                    </Button>
                    &nbsp;
                    <Button variant="primary" size="lg">
                      <a href="/signup">Login</a>
                    </Button>
                    </div>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
};
