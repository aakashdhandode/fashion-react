import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function MainTabs() {
  return (
    <div>
      <Row className="justify-content-md-center">
        <Col lg={{ span: 8, offset: 2 }}>
          <div className="payment-steps text-center">
            <ul>
              <li>
                <Link to="/cart" className="active">
                  Cart
                </Link>
              </li>
              <li>-----------</li>
              <li>
                <Link to="/delivery">Delivery</Link>
              </li>
              <li>-----------</li>
              <li>
                <Link to="/">Payment</Link>
              </li>
              <li className="clearfix"></li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MainTabs;
