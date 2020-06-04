import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { taxes } from "./../redux/Subtotal/subtotalActions";

function EstimatedTaxes({ taxes, computeTaxes }) {
  useEffect(() => {
    computeTaxes();
  });

  return (
    <Row>
      <Col md={6}>Est. taxes & fees (Based on RA#548)</Col>
      <Col md={6}>{`P  ${taxes.toFixed(2)}`}</Col>
    </Row>
  );
}

const mapStateToProps = ({ subtotal: { taxes } }) => ({
  taxes
});

const mapDispatchToProps = dispatch => ({
  computeTaxes: () => dispatch(taxes())
});

export default connect(mapStateToProps, mapDispatchToProps)(EstimatedTaxes);
