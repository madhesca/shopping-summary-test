import React from "react";
import { Row, Col } from "react-bootstrap";

function EstimatedTaxes({ taxes }) {
  return (
    <Row>
      <Col md={6}>Est. taxes & fees (Based on RA#548)</Col>
      <Col md={6}>{`P ${taxes.toFixed(2)}`}</Col>
    </Row>
  );
}

export default EstimatedTaxes;
