import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartSummery from "./CartSummery";
import MainTabs from "./MainTabs";

function Delivery() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div className="mtb-5">
      <section className="shopping-cart">
        <Container>
          <MainTabs />
          <Row className="mt-5">
            <Col className="text-center">
              <h4>YOUR SHOPPING CART</h4>
              <h6>Enter your shipping address</h6>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col sm={8}>
              <Row>
                <Col sm={5}>
                  <div className="address-card">
                    <h4>Rahul Sharma</h4>
                    <h5>Default Address</h5>
                    <p>
                      123, ProbynRoad, Hyderabad, Telangana-500090, India
                      <br /> Mobile: 99993333222
                    </p>
                    <div className="mt-4">
                      <button className="edit" onClick={() => setLgShow(true)}>
                        Edit
                      </button>
                      <Link to="/" className="edit pull-right">
                        Select
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col sm={{ span: 5, offset: 1 }}>
                  <button
                    type="button"
                    className="btn-block btn-address"
                    onClick={() => setLgShow(true)}
                  >
                    Add new address
                  </button>
                </Col>
              </Row>
            </Col>
            <Col sm={4}>
              <CartSummery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Modal  */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="user-address"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Form.Group className="col-sm-6">
                <Form.Label>
                  Country <span>*</span>
                </Form.Label>
                <Form.Select className="form-control">
                  <option>Please Select</option>
                  <option>India</option>
                  <option>USA</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="col-sm-6">
                <Form.Label>
                  State/Province <span>*</span>
                </Form.Label>
                <Form.Select className="form-control">
                  <option>Please Select</option>
                  <option>Telangana</option>
                  <option>Maharashtra</option>
                  <option>Karnataka</option>
                  <option>Englend</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="col-sm-6">
                <Form.Label>
                  City <span>*</span>
                </Form.Label>
                <Form.Select className="form-control">
                  <option>Please Select</option>
                  <option>Telangana</option>
                  <option>Maharashtra</option>
                  <option>Karnataka</option>
                  <option>Englend</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="col-sm-6">
                <Form.Label>
                  Zip/Postal Code <span>*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Zip/Postal Code" />
              </Form.Group>

              <Form.Group className="col-sm-6">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Address" />
              </Form.Group>

              <Form.Group className="col-sm-6">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Apt, Suite, Building" />
              </Form.Group>

              <Form.Group className="col-sm-6">
                <Form.Label>
                  First Name <span>*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group className="col-sm-6">
                <Form.Label>
                  Last Name <span>*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>

              <Form.Group className="col-sm-6">
                <Form.Label>
                  Mobile Number <span>*</span>
                </Form.Label>
                <Form.Control type="number" placeholder="Mobile Number" />
              </Form.Group>

              <Form.Group className="col-sm-6">
                <Form.Label>
                  Email <span>*</span>
                </Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group className="col-sm-4">
                <button type="submit" className="btn-block btn-address-submit">
                  Add Address
                </button>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Delivery;
