import React from "react";
import { Col, Row } from "react-bootstrap";

function Total({ total }) {
  return (
    <div>
      <Row>
        <Col md={6}>
          <strong>TOTAL</strong>
        </Col>
        <Col md={6}>
          <strong>{total}</strong>
        </Col>
      </Row>
    </div>
  );
}

export default Total;
