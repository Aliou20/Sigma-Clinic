import "./Header.css";
import React from "react";
import { Button, Col, Navbar, Row } from "react-bootstrap";
import imgLogo from '../../Assets/logo.svg'
import imgPortrait from '../../Assets/portrait.svg'

function Header() {
  return (
  
      <div className="conteneur_header">
      <div className="bg_img_left">
     <Navbar className="pb-5 px-5">
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              src={imgLogo}
              // width="40"
              // height="40"
              // className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <div className="mx-3">Sigma <span className="d-block">Clinic</span></div>
          </Navbar.Brand>
      </Navbar>
      <div className="container-fluid">
      <Row className="ms-md-5 pb-5">
        <Col className="col-12 col-md-5">
          <Row>
            <Col className="col-12 mb-3">
             <div className="conteneur_title ">
              <h1 className="title fw-bold fs-1">Complete Health</h1>
              <h1 className="title fw-bold fs-1"> Care Solution for</h1>
              <h1 className="title fw-bold fs-1"> Everyone</h1>
             </div>
             <div className="w-75">
              <p className="para text-muted">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              </p>
             </div>
              <Button variant="primary" className="px-4 mt-2">Book Now</Button>
          </Col>
          </Row>
        </Col>
        <Col className="col-12 col-md-7 bg_image">
            <img src={imgPortrait} alt="Portrait" className=" img_protrait img img-fluid" />
        </Col>
      </Row>
      </div> 
      </div>
    </div>
  );
};

export default Header;
