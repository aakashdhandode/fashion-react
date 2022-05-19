import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function OrderSummery() {
  return (
    <div>
      <div className="mtb-5">
        <section className="shopping-cart">
          <Container>
            <Row className="mt-1">
              <Col md={8}>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th></th>
                        <th className="w-10">PRODUCT NAME</th>
                        <th>ITEM COST</th>
                        <th>QUANTITY</th>
                        <th>TOTAL COST</th>
                        <th>#</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-15">
                          <a href="/product-details">
                            <Image
                              src={require("../../assets/images/product-img/proi.png")}
                              className="img-responsive t-pro-img"
                              alt="product image"
                            />
                          </a>
                        </td>
                        <td className="w-35 pl-10">
                          <h5>
                            <a href="/product-details">
                              Red Banarasi Saree In Silk With Weaved Floral Jaal{" "}
                            </a>
                          </h5>
                          <p>
                            <b>Size:</b> M
                          </p>
                          <p>
                            Estimated Delivery Date: <br />
                            <b>28 oct 2020</b>
                          </p>
                        </td>
                        <td>Rs. 2,399</td>
                        <td>1</td>
                        <td>Rs. 2,399</td>
                        <td>
                          <a href="" className="edit">
                            Edit
                          </a>
                          &nbsp;
                          <br />
                          <a href="" className="remove">
                            Remove
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="w-15">
                          <a href="/product-details">
                            <Image
                              src={require("../../assets/images/product-img/proi.png")}
                              className="img-responsive t-pro-img"
                              alt="product image"
                            />
                          </a>
                        </td>
                        <td className="w-35 pl-10">
                          <h5>
                            <a href="/product-details">
                              Red Banarasi Saree In Silk With Weaved Floral Jaal{" "}
                            </a>
                          </h5>
                          <p>
                            <b>Size:</b> M
                          </p>
                          <p>
                            Estimated Delivery Date: <br />
                            <b>28 oct 2020</b>
                          </p>
                        </td>
                        <td>Rs. 2,399</td>
                        <td>1</td>
                        <td>Rs. 2,399</td>
                        <td>
                          <a href="" className="edit">
                            Edit
                          </a>
                          &nbsp;
                          <br />
                          <a href="" className="remove">
                            Remove
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Row className="mt-5">
                  <Col sm={6}>
                    <h2>100% Purchase Protection</h2>
                    <p>
                      We are committed to ensure 100% Purchase protection for
                      customers by offering genuine products
                    </p>
                  </Col>
                  <Col sm={6}>
                    <h2>Happiness Guarantee</h2>
                    <p>Secure payments and easy returns for items shopped</p>
                  </Col>
                </Row>
              </Col>

              <Col md={4}>
                <div className="cart-summery">
                  <h5>ORDER SUMMARY</h5>
                  <p>#1342414</p>
                  <p>
                            Order placed on 23/10/2020 <br />
                            Paid through SBI Debit Card <br />
                            Order delivered on 25/10/2020
                        </p>
                        <div className="divider"></div>
                  <div className="table-responsive mt-20">
                    <ul>
                      <li>
                        Subtotal <span className="pull-right">Rs. 2,399</span>
                      </li>
                      <li>
                        Shipping(FREE-Blue Dart)
                        <span className="pull-right">Rs. 00</span>
                      </li>
                      <li>
                      Applicable GST
                        <span className="pull-right">Rs. 29</span>
                      </li>
                      <div className="divider"></div>
                      <li>
                        <b>Grand Total</b>{" "}
                        <span className="pull-right">Rs. 2,399</span>
                      </li>
                    </ul>
                  </div>
                </div>
            
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
}

export default OrderSummery;
