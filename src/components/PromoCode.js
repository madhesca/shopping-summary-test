import React, { useState, useEffect } from "react";
import { Col, Row, Collapse, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
  clickHandler,
  changeHandler,
} from "../redux/PromoCode/promoCodeActions";

import { total } from "../redux/Subtotal/subtotalActions";

function PromoCode({
  changed,
  discount,
  apply,
  applied,
  total,
  promoTotal,
  totalAmount,
}) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    totalAmount();
  });

  return (
    <div>
      <Row>
        <Col md={6}>
          {apply ? (
            <h3> {promoTotal.toFixed(2)}</h3>
          ) : (
            <h3>{total.toFixed(2)}</h3>
          )}
          <Button onClick={() => setToggle(!toggle)}>
            {!toggle ? "+ Show" : "- Hide"} Code
          </Button>
        </Col>
      </Row>
      <br />
      <Collapse in={toggle}>
        <Row>
          <Col md={12}>
            <label>
              {apply ? "Thank you" : "Input 'DISCOUNT' as promo code"}
            </label>
            <br />
            <input
              type="text"
              value={discount}
              onChange={(e) => changed(e.target.value)}
            />

            <button
              onClick={
                discount === "DISCOUNT" || discount === "discount"
                  ? () => applied(total)
                  : null
              }
              disabled={apply}
              className="btn btn-primary"
            >
              {apply ? "Applied" : "Apply"}
            </button>
          </Col>
        </Row>
      </Collapse>
    </div>
  );
}

const mapStateToProps = (state) => ({
  apply: state.promoCode.apply,
  discount: state.promoCode.discount,
  total: state.subtotal.total,
  promo: state.subtotal.promo,
  promoTotal: state.promoCode.promo,
});

const mapDispatchToProps = (dispatch) => ({
  applied: (total) => dispatch(clickHandler(total)),
  changed: (input) => dispatch(changeHandler(input)),
  totalAmount: () => dispatch(total()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoCode);
