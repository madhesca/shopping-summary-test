import React from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

function SubTotal({ price }) {
  return (
    <Row>
      <Col md={6}>Subtotal</Col>
      <Col md={6}>{`P  ${price.toFixed(2)}`}</Col>
    </Row>
  );
}

const mapStateToProps = (state) => ({
  price: state.subtotal.price,
});

export default connect(mapStateToProps)(SubTotal);
