import React, { useState } from "react";
import { Col, Row, Collapse, Button } from "react-bootstrap";

function PromoCode() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <Row>
        <Col md={6}>
          <Button onClick={() => setToggle(!toggle)}> {!toggle ? "+ Show" : "- Hide"} Code</Button>
        </Col>
      </Row>
      <br />
      <Collapse in={toggle}>
        <Row>
          <Col md={12}>
            <label>Input promo code</label>
            <br />
            <input placeholde="Please input promo code" />

            <button className="btn btn-primary">Apply</button>
          </Col>
        </Row>
      </Collapse>
    </div>
  );
}

export default PromoCode;
