import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { total } from "../redux/Subtotal/subtotalActions";

function Total({ total, totalAmount, promoTotal, apply }) {
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
          {apply ? (
            <strong> {promoTotal.toFixed(2)}</strong>
          ) : (
            <strong>{total.toFixed(2)}</strong>
          )}
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  total: state.subtotal.total,
  promoTotal: state.promoCode.promo,
  apply: state.promoCode.apply,
});

const mapDispatchToProps = (dispatch) => ({
  totalAmount: () => dispatch(total()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Total);
