import "./Profils.css";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import imgProfil1 from "../../Assets/profil-left.svg"
import imgProfil2 from "../../Assets/profil-right.svg"


function Profils() {
  const datas = [
    {
      image : imgProfil1,
      name : "Josh brollins",
      site : "mywebsite.com",
      para : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusame"
    },
    {
      image : imgProfil2,
      name : "Dave inau",
      site : "yourwebsite.com",
      para : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusame"
    }
  ]
  return (
    <section className="profils my-5">
      <div className="my-5 Py-5">
        <h1 className="fs-1 fw-bold text-center mb-3">Testimonials</h1>
        <p className="text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          <span className="d-block">eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</span>
        </p>
        <Row className="gy-4 gy-md-5 mx-2 my-5 m-md-5">
          {datas.map(data => (
            <Col className="col-12 col-md-6">
              <div className="cote_left"></div>
              <Card className="shadow p-4 card">
                <div className="d-flex align-items-center">
                  <div className="">
                    <img src={data.image} alt="profil1" className="img"/>
                  </div>
                  <div className="mx-3">
                    <p className="fs-3 d-inline">{data.name}</p><a href="#gmkf" className="text-muted text-decoration-none ms-2">{data.site}</a>
                  </div>
                </div>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                        {data.para}
                    </p>
                  </blockquote>
                </Card.Body>
              </Card>
          <div className="cote_right"></div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Profils;
