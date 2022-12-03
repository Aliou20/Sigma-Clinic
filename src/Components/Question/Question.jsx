import "./Question.css";
import React from "react";
import { Accordion } from "react-bootstrap";

function Questions() {
  return (
    <section className="question m-3 m-md-5">
      <h1 className="text-center fw-bold fs-1">Frequently Asked Questions</h1>
      <Accordion className="container-fluid container-md">
      <Accordion.Item eventKey="0" className="shadow my-4">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sit laboriosam provident optio tenetur officia necessitatibus quam neque quisquam sapiente sequi temporibus, quod dicta quia. Nostrum adipisci incidunt labore nam?
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="shadow my-4">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sit laboriosam provident optio tenetur officia necessitatibus quam neque quisquam sapiente sequi temporibus, quod dicta quia. Nostrum adipisci incidunt labore nam?
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="shadow my-4">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sit laboriosam provident optio tenetur officia necessitatibus quam neque quisquam sapiente sequi temporibus, quod dicta quia. Nostrum adipisci incidunt labore nam?
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="shadow my-4">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sit laboriosam provident optio tenetur officia necessitatibus quam neque quisquam sapiente sequi temporibus, quod dicta quia. Nostrum adipisci incidunt labore nam?
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className="shadow my-4">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia sit laboriosam provident optio tenetur officia necessitatibus quam neque quisquam sapiente sequi temporibus, quod dicta quia. Nostrum adipisci incidunt labore nam?
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </section>
  );
};

export default Questions;
