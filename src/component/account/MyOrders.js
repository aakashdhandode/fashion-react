import React from "react";
import { Container, Col, Row, Table } from "react-bootstrap";
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
                      <a href="/product-details">
                        <img
                          src="http://127.0.0.1:8000/images/products/3.png"
                          className="img-responsive"
                          alt="Irish Deer"
                        />
                      </a>
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
                      <Link to="/order-summary" className="order-edit">
                        <i className="fa fa-chevron-right"></i>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-15">
                      <Link to="/product-details">
                        <img
                          src="http://127.0.0.1:8000/images/products/3.png"
                          className="img-responsive"
                          alt="Irish Deer"
                        />
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
                      <Link to="/order-summary" className="order-edit">
                        <i className="fa fa-chevron-right"></i>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
        </Row>

        {/* <div className="table-responsive my-orderss">
          <table className="table">
            <tbody>
              <tr>
                <td className="w-15">
                  <a href="/product-details">
                    <img
                      src="http://127.0.0.1:8000/images/products/3.png"
                      className="img-responsive"
                      alt="Irish Deer"
                    />
                  </a>
                </td>
                <td className="w-95 pl-10">
                  <p>
                    <b>Order ID</b> <br /> #2444112441
                  </p>
                  <br />
                  <p>
                    <b>Delivered on</b> <br /> 23/20/2020
                  </p>
                </td>

                <td>
                  <a href="/order-summary" className="edit">
                    <i className="fa fa-chevron-right"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}

        {/* <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Order ID</th>
              <th>Delivered On</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>View</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </Table> */}
      </Container>
    </div>
  );
}

export default MyOrders;
