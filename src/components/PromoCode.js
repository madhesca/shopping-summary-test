import React, { useState } from "react";
import { Col, Row, Collapse, Button } from "react-bootstrap";

function PromoCode({ clickHandler, changeHandler, discount, applied }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Row>
        <Col md={6}>
          <Button onClick={() => setToggle(!toggle)}>
            {!toggle ? "+ Show" : "- Hide"} Code
          </Button>
        </Col>
      </Row>
      <br />
      <Collapse in={toggle}>
        <Row>
          <Col md={12}>
            <label>{applied ? "Thank you" : "Input promo code"}</label>
            <br />
            <input
              type="text"
              value={discount}
              onChange={(e) => changeHandler(e)}
            />

            <button
              onClick={
                discount === "DISCOUNT" ? () => clickHandler(discount) : null
              }
              disabled={applied}
              className="btn btn-primary"
            >
              {applied ? "Applied" : "Apply"}
            </button>
          </Col>
        </Row>
      </Collapse>
    </div>
  );
}

export default PromoCode;
