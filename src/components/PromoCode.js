import React, { useState } from "react";
import { Col, Row, Collapse, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { clickHandler, changeHandler } from "../redux/PromoCode/promoCodeActions";

function PromoCode({ changed, discount, apply, applied, total }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Row>
        <Col md={6}>
          <h3>{total * 0.9}</h3>
          <Button onClick={() => setToggle(!toggle)}>{!toggle ? "+ Show" : "- Hide"} Code</Button>
        </Col>
      </Row>
      <br />
      <Collapse in={toggle}>
        <Row>
          <Col md={12}>
            <label>{apply ? "Thank you" : "Input promo code"}</label>
            <br />
            <input type="text" value={discount} onChange={e => changed(e.target.value)} />

            <button onClick={() => applied(total)} disabled={apply} className="btn btn-primary">
              {apply ? "Applied" : "Apply"}
            </button>
          </Col>
        </Row>
      </Collapse>
    </div>
  );
}

const mapStateToProps = state => ({
  apply: state.promoCode.apply,
  discount: state.promoCode.discount,
  total: state.subtotal.total
});

const mapDispatchToProps = dispatch => ({
  applied: total => dispatch(clickHandler(total)),
  changed: input => dispatch(changeHandler(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoCode);
