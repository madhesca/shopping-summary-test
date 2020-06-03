import React from "react";
import { Row, Col } from "react-bootstrap";

function SubTotal({ price }) {
  return (
    <Row>
      <Col md={6}>Subtotal</Col>
      <Col md={6}>{`P${price.toFixed(2)}`}</Col>
    </Row>
  );
}

export default SubTotal;
