import "./Doctors.css";
import React from "react";
import imgDoctors1 from '../../Assets/doctors1.svg'
import imgDoctors2 from '../../Assets/doctors2.svg'
import imgDoctors3 from '../../Assets/doctors3.svg'
import { Card, Col, Row } from "react-bootstrap";

function Doctors() {

  const datas = [
    {
      image : imgDoctors1,
      name :  'Dr. Lindsey Botosh',
      fonction : 'Pediatrician'
    },
    {
      image : imgDoctors2,
      name :  'Dr. Jon Doe',
      fonction : 'Dentist'
    },
    {
      image : imgDoctors3,
      name :  'Dr. Lindsey Botosh',
      fonction : 'Cardiologist'
    }
  ]
  return (
    <section className="doctors m-md-5">
      <div className="m-md-5 m-4">
        <h1 className="text-center fs-1 fw-bold">Meet our Great Doctors</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          <span className="d-block">eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</span>
        </p>

        <Row className="my-5">
          {datas.map(data => (
            <Col className="col-12 col-md-4 my-3 my-md-0">
            <Card className="cards_doctors">
              <div className="conteneur_img">
                <Card.Img variant="top" src={data.image} className="image"/>
              </div>
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                  {data.fonction}
                </Card.Text>
              
              </Card.Body>
            </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Doctors;
