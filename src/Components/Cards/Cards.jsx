import "./Cards.css";
import React from "react";
import imgCardiologie from '../../Assets/cardiologie.svg'
import imgXray from '../../Assets/x-ray.svg'
import imgCrutches from '../../Assets/Crutches.svg'
import imgPulmonary from '../../Assets/Pulmonary.svg'
import imgNeurology from '../../Assets/Neurology.svg'
import imgDentistry from '../../Assets/Dentistry.svg'
import { Card, Col } from "react-bootstrap";

function Cards() {
  const datas = [
    {
      image : imgCardiologie,
      name : "Cardiologie",
      para : "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed"
    },
    {
      image : imgCrutches,
      name : "X-ray",
      para : "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed"
    },
    {
      image : imgXray,
      name : "Crutches",
      para : "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed"
    },
    {
      image : imgPulmonary,
      name : "Pulmonary",
      para : "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed"
    },
    {
      image : imgNeurology,
      name : "Neurology",
      para : "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed"
    },
    {
      image : imgDentistry,
      name : "Dentistry",
      para : "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed"
    }
  ]
  return (
    <>
      {datas.map(data => (
        <Col className="col-12 col-md-3">
              <Card className="card_services">
                <div>
                  <Card.Img variant="start" src={data.image} className="h-25 mb-2"/>
                </div>
                <Card.Body>
                  <Card.Title className="fs-1 fw-bold text-start">{data.name}</Card.Title>
                  <Card.Text className="mt-4">
                    {data.para}
                  </Card.Text>
                </Card.Body>
              </Card>
        </Col>
      ))},
    </>
  );
};

export default Cards;
