import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { VscHeart } from "react-icons/vsc";

function WishList() {
  return (
    <div className="mtb-5">
      <Container>
        <ul className="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>Wishlist</li>
        </ul>
        <Row>
            <Col sm={3}>
            <div className="top-pick-card">
            <div className="top-pick-card-img">
              <div className="discount">
                <p>
                  15% <br /> OFF
                </p>
              </div>
              <Link to="/details">
                <Image
                  src={require("../assets/images/product-img/proi.png")}
                  className="img-responsive"
                  alt="product image"
                />
              </Link>
              <div className="wish-icon">
                <Link to="/">
                  <VscHeart />
                </Link>
              </div>
            </div>
            <Link to="/">
              <div className="price">
                <p> White Suit In Cotton Silk With Matching Net Dupatta</p>
                            <Link to="/" className="remove">Remove from wishlist</Link>
              </div>
            </Link>
          </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WishList;
