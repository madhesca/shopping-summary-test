import React, { useState } from "react";
import { Button, Row, Col, Collapse, Media } from "react-bootstrap";
import { connect } from "react-redux";

function ItemDetails({ total, promoTotal, apply }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <Row>
        <Col md={6}>
          <Button onClick={() => setToggle(!toggle)}>
            {!toggle ? "+ Show" : "- Hide"} Item
          </Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={12}>
          <Collapse in={toggle}>
            <div>
              <p>Chair</p>
              <img
                width={100}
                height={100}
                alt="thumbnail"
                src="https://i5.walmartimages.com/asr/2ab43621-0110-48a0-9fd5-6db48d5ee8e4_1.ff8d1590e386fcecebeb781fd92010b1.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
              />

              <Media.Body>
                <p>This is a cool chair</p>
                <Row className="show-grid">
                  <Col md={6}>
                    <strong>Qty: 1</strong>
                    <br />
                  </Col>
                  <Col md={6}>
                    {apply ? (
                      <strong> {promoTotal.toFixed(2)}</strong>
                    ) : (
                      <strong>{total.toFixed(2)}</strong>
                    )}
                  </Col>
                </Row>
              </Media.Body>
            </div>
          </Collapse>
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
export default connect(mapStateToProps)(ItemDetails);
