import React from "react";
import { Container, Form, Row, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyAccount() {
  return (
    <div className="mtb-5">
      <Container>
        <div className="page-links mb-5">
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Admin</Link>
            </li>
            <li>
              <Link to="/">My Account</Link>
            </li>
          </ul>
        </div>
        <div className="mt-5 page-subtitles">
          <div className="text-center">
            <h4>PERSONAL INFORMATION</h4>
            <h6>
              Hey! provide us your details for enhanced shopping experience.
            </h6>
          </div>
        </div>

        <div className="mt-5 account-details">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Row>
                  <Form.Group className="col-sm-6">
                    <Form.Label>
                      First Name <span>*</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Rahul" />
                  </Form.Group>

                  <Form.Group className="col-sm-6">
                    <Form.Label>
                      Last Name <span>*</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Sharma" />
                  </Form.Group>

                  <Form.Group className="col-sm-6">
                    <Form.Label>
                      Screen Name <span>*</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Rahul Sharma" />
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
                    <Form.Control
                      type="email"
                      placeholder="ruhulsharma@gmail.com"
                    />
                  </Form.Group>

                  <Form.Group
                    className="col-sm-6"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Group className="col-sm-4">
                    <button
                      type="submit"
                      className="btn-block btn-address-submit"
                    >
                      Update
                    </button>
                  </Form.Group>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default MyAccount;
