import "./Footer.css";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import imgPortraitFooter from '../../Assets/portrait-footer.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="conteneur_footer mx-3 mx-md-5">
        <Row className="align-items-center gx-5 mx-0 mx-md-5" >
          <Col className="col-12 col-md-3 d-flex justify-content-center">
            <Form className="row p-3 shadow border rounded">
              <Col className="col-12">
                <h5 >Book an Appointment</h5>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="Full name" className="bg-light"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control type="number" placeholder="Phone number" className="bg-light"/>
                </Form.Group>
                <Form.Select className="mb-3 bg-light">
                  <option>Color select</option>
                  <option>One</option>
                  <option>Two</option>
                  <option>Tree</option>
                </Form.Select>
                <Form.Select className="mb-3 bg-light">
                  <option>Day select</option>
                  <option>Monday</option>
                  <option>Thurday</option>
                  <option>Wesdnesday</option>
                </Form.Select>
              </Col>
              <Col className="col-12">
                <button className="btn btn-primary w-100">BOOK NOW</button>
              </Col>
            </Form>
          </Col>
          <Col className="col-12 col-md-5 my-5 my-md-0">
            <p className="fs-1 fw-bold my-0 py-0">Lorem ipsum dolor sit amet,</p>
            <p className="fs-1 fw-bold my-0 mb-5">consetetur</p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr
            </p>
          </Col>
          <Col className="col-12 col-md-4">
            {/* <div> */}
              <img src={imgPortraitFooter} alt="image" className="img img-fluid  portrait_img"/>
            {/* </div> */}
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
