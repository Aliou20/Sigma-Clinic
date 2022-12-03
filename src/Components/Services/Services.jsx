import "./Services.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Cards from "../Cards/Cards";

function Services() {
  return (
    <section className="services m-md-5 " >
      <div className=" m-4 m-md-5">
        <Row className="gy-5">
          <Col className="col-12 col-md-6">
            <h2 className="fw-bold fs-1">Quality care for you and</h2>
            <h2 className="fw-bold fs-1 mb-4">The Once you loved</h2>
            <p className="w-75">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor Lorem ipsum dolor sit
              amet consetetur sadipscing elitr
            </p>
          </Col>
          <Cards />
        </Row>
      </div>
    </section>
  );
};

export default Services;
