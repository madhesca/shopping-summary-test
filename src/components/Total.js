import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { total } from "../redux/Subtotal/subtotalActions";

function Total({ total, totalAmount }) {
  useEffect(() => {
    totalAmount();
  });

  return (
    <div>
      <Row>
        <Col md={6}>
          <strong>TOTAL</strong>
        </Col>
        <Col md={6}>
          <strong>{total.toFixed(2)}</strong>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = ({ subtotal: { total } }) => ({
  total
});

const mapDispatchToProps = dispatch => ({
  totalAmount: () => dispatch(total())
});

export default connect(mapStateToProps, mapDispatchToProps)(Total);
