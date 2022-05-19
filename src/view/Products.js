import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductsCard from "../component/product/ProductsCard";
import Filters from "../component/slidefilter/Filters";

function Products() {
  return (
    <div className="mtb-5">
      <Container>
        <div className="page-links mb-5">
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Women</Link>
            </li>
          </ul>
        </div>

        {/* Side Filter section */}
        <Row>
          <Col sm={6} lg={3}>
            <Filters />
          </Col>
          <Col sm={9}>
            <Row className="product-listing ">
              <Col sm={6}>
                <form action="/">
                  <Row>
                    <Col sm={3}>
                      <label>SORT BY</label>
                    </Col>
                    <Col sm={5}>
                      <Form.Select
                        aria-label="Default select example"
                        className="form-control"
                      >
                        <option>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </form>
              </Col>
              <Col sm={6}>
                <ul className="pagination pagination-sm pull-right">
                  <li>1-27 items of 450</li>
                </ul>
              </Col>
            </Row>
            <Row className="mt-3">
              <div className="col-md-4">
                <ProductsCard />
              </div>
              <div className="col-md-4">
                <ProductsCard />
              </div>
              <div className="col-md-4">
                <ProductsCard />
              </div>
              <div className="col-md-4">
                <ProductsCard />
              </div>
              <div className="col-md-4">
                <ProductsCard />
              </div>
              <div className="col-md-4">
                <ProductsCard />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Products;
