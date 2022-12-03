import "./ChoisesCards.css";
import React from "react";
import imgConsultation from '../../Assets/Consultation.svg'
import imgHours from '../../Assets/Hours.svg'

import { Card } from "react-bootstrap";


function ChoisesCards() {

  const datas = [
    {
      imag : imgConsultation,
      name : "Get Free Consultation",
      para : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
    },
    {
      imag : imgHours,
      name : "Hours Consultation",
      para : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
    }
  ]
  return (
    <>
      {datas.map(data => (
        <Card className="my-5 shadow py-4" >
            <Card.Img variant="center" src={data.imag} className="w-25 my-1 ms-3"/>
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text>
                    {data.para}
                  </Card.Text>
                </Card.Body>
       </Card>
      ))}
    </>
  );
};

export default ChoisesCards;
