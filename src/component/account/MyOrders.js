import React from "react";
import { Container, Col, Row, Table, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyOrders() {
  return (
    <div>
      <Container>
        <div className="mtb-5">
          <div className="page-links mb-5">
            <ul className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Admin</Link>
              </li>
              <li>
                <Link to="/">My Orders</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 page-subtitles">
          <div className="text-center">
            <h4>MY ORDERS</h4>
            <h6>
              Track your present orders and <br />
              view the summary of past orders
            </h6>
          </div>
        </div>

        <Row className="my-orderss mt-4">
          <Col md={{ span: 8, offset: 2 }}><hr/>
            <div className="table-responsive my-orders">
              <table className="table">
                <tbody>
                  <tr>
                    <td className="w-15">
                      <Link to="/ordersummery">
                      <Image src={require('../../assets/images/product-img/cat2.webp')} className="" alt="product image" />

                      </Link>
                    </td>
                    <td className="pl-10">
                      <p>
                        <b>Order ID</b> <br /> #2444112441
                      </p>
                      <br />
                      <p>
                        <b>Delivered on</b> <br /> 23/20/2020
                      </p>
                    </td>
                    <td>
                      <Link to="/ordersummery" className="order-edit">
                        <i className="fa fa-chevron-right"></i>
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td className="w-15">
                      <Link to="/ordersummery">
                          <Image src={require('../../assets/images/product-img/cat1.webp')} className="" alt="product image" />
                      </Link>
                    </td>
                    <td className="pl-10">
                      <p>
                        <b>Order ID</b> <br /> #2444112441
                      </p>
                      <br />
                      <p>
                        <b>Delivered on</b> <br /> 23/20/2020
                      </p>
                    </td>
                    <td>
                      <Link to="/ordersummery" className="order-edit">
                        <i className="fa fa-chevron-right"></i>
                      </Link>
                    </td>
                  </tr>
          
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyOrders;
