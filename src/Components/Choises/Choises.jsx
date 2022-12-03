import "./Choises.css";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ChoisesCards from "../ChoisesCards/ChoisesCards";
import imgQualified from '../../Assets/Quality.svg'


function Choices() {
  return (
    <section className="choises  p-md-5">
      <div className="m-4 m-md-5">
        <Row className="align-items-center">
          <Col className="col-12 col-md-6">
            <div className="mb-5">
              <h2 className="fs-1 fw-bold">Why Choose Our</h2>
              <h2 className="fs-1 fw-bold">Clinic?</h2>
            </div>
            <p className="w-75">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor Lorem ipsum dolor sit
              amet consetetur sadipscing elitr
            </p>
            <Row className="w-100 w-md-50">
              <Col className="col-6">
                <p className=" fw-bold number">25</p>
                <p>Best Doctors</p>
              </Col>
              <Col className="col-6">
                <p className=" fw-bold number">3</p>
                <p>Clinic Locations</p>
              </Col>
            </Row>
            <Row className="w-100 w-md-50">
              <Col className="col-6">
                <p className=" fw-bold number">150+</p>
                <p>Patients Capacity</p>
              </Col>
              <Col className="col-6">
                <p className=" fw-bold number">1900+</p>
                <p>Patients Cured</p>
              </Col>
            </Row>
          </Col>
          <Col className="col-12 col-md-6">
              <Row className="align-items-center">
                <Col className="col-12 col-md-6">
                  <ChoisesCards />
                </Col>
                <Col className="col-12 col-md-6">
                  <Card className=" shadow py-4" >
                      <Card.Img variant="center" src={imgQualified} className="w-25 my-1 ms-3"/>
                          <Card.Body>
                            <Card.Title>Qualified Doctors</Card.Title>
                            <Card.Text>
                              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            </Card.Text>
                      </Card.Body>
                  </Card>
                </Col>
              </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Choices;
