import React from "react";
import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

var styles = {
  pickupSavings: {
    textDecoration: "underline"
  },
  totalSavings: {
    color: "red",
    fontWeight: 800
  }
};

function Pickup({ price }) {
  const tooltip = (
    <Tooltip id="tooltip">
      <p>Picking up your order</p>
    </Tooltip>
  );
  return (
    <Row>
      <Col md={6}>
        <OverlayTrigger placement="left" overlay={tooltip}>
          <div style={styles.pickupSavings}>Pickup Savings</div>
        </OverlayTrigger>
      </Col>
      <Col md={6}>{`P${price.toFixed(2)}`}</Col>
    </Row>
  );
}

export default Pickup;
